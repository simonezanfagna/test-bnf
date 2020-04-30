$(document).ready(function () {

  // GESTIONE CAROUSEL NEL DIV SQUARE
  // assegno l' evento click allo span con classe 'right' (freccia destra)
  $('.square span.right').click(function () {
    // la variabile count serve per capire quante img (in questo caso) ci sono.
    var count = $('.square .container-img').children().length;
    // la variabile left per lo span con classe 'left' (freccia sinistra)
    var left = $('.square span.left');
    // la variabile right per la freccia destra
    var right = $(this);
    // quando si carica la pagina per la prima volta sarà visibile solo la freccia destra
    // quindi al primo click sulla freccia destra mostro anche la freccia sinistra
    // che mi permette di andare all' img precedente
    left.show();
    // la variabile img_corrente serve per capire quale img ha la classe 'active-img' e quindi l' img che si sta visualizzando
    var img_corrente = $('.square .container-img img.active-img');
    // alla variabile nuova_img assegno la successiva img
    var nuova_img = img_corrente.next('img');

    // se la posizione della nuova img è == a count, significa che l'img è l' ultima da mostrare
    // quindi nascondo la freccia destra
    if ((nuova_img.index() + 1) == count ) {
      right.hide();
    }

    // rimuovo la classe 'active-img' dall' img corrente
    img_corrente.removeClass('active-img');
    // assegno la classe 'active-img' alla nuova img
    nuova_img.addClass('active-img');

  });

  // per la freccia sinistra, il funzionamento è lo stesso ma ovviamente si gestiscono le img
  // precedenti da mostrare
  $('.square span.left').click(function () {
    var right= $('.square span.right');
    var left = $(this);
    right.show();
    var img_corrente = $('.square .container-img img.active-img');
    var nuova_img = img_corrente.prev('img');

    if (nuova_img.index() == 0 ) {
      left.hide();
    }

    img_corrente.removeClass('active-img');
    nuova_img.addClass('active-img');

  })

  // GESTIONE CAROUSEL NEL DIV CAROUSEL-STUDIO
  // in questo caso le frecce destra e sinistra saranno sempre visibili
  // quindi imposto solo le variabili img_corrente e nuova_img
  // esse hanno lo stesso funzionamento delle variabili (img_corrente e nuova_img) nel div square
  $('.icon-carousel-studio .fa-chevron-right').click(function () {
    var img_corrente = $('.carousel-studio-img img.active-img');
    var nuova_img = img_corrente.next('img');

    // se premendo la freccia destra, la length di nuova_img è zero
    // significa che l' img da mostrare sono terminate e quindi torno alla prima img
    if (nuova_img.length == 0) {
      nuova_img = $('.carousel-studio-img img:first-child');
    }

    img_corrente.removeClass('active-img');
    nuova_img.addClass('active-img');

  });


  $('.icon-carousel-studio .fa-chevron-left').click(function () {
    var img_corrente = $('.carousel-studio-img img.active-img');
    var nuova_img = img_corrente.prev('img');

    // se premendo la freccia sinistra, la length di nuova_img è zero
    // significa che l' img da mostrare sono terminate e quindi torno all' ultima img
    if (nuova_img.length == 0) {
      nuova_img = $('.carousel-studio-img img:last-child');
    }

    img_corrente.removeClass('active-img');
    nuova_img.addClass('active-img');

  })

  // GESTIONE VALIDAZIONE DATI FORM
  // aggiungo l' evento click al tag button contenuto nel form
  // la funzione associata a questo evento mi permette di gestire la validazione del campo email
  // creo la variabile contenente il rispettivo valore
  // nella variabile 'email_valid' aggiungo l' espressione regolare per controllare la forma dell' email digitata dall' utente
  $('form button').click(function () {
    var email = $('form[name=datiForm] input[name=email]').val();

    // se l' email non è stata scritta nella forma contenuta in 'email_valid' oppure è uguale a "" oppure è uguale ad "undefined"
    // allora mostra un alert e si blocca
    var email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    if (!email_valid.test(email) || (email == "") || (email == "undefined")) {
      alert("Devi inserire un indirizzo mail corretto");
      $('form[name=datiForm] input[name=email]').focus();
      return false;
    }
    // se i dati sono corretti al form viene attribuita l' action = 'index.html' (ovviamente quanto contenuto nell' action è un esempio)
    // (si dovrebbe inserire la rotta)
    // e poi effettua il submit
    else {
      $('form[name=datiForm]').attr('action', "index.html");
      $('form[name=datiForm]').submit();
    }
  })

  // GESTIONE DELL' ICONA 'BARS'
  // al click sull' icona verrà mostrato il menù
  $('.icon-bars i').click(function () {
    $('#menu-bars').slideToggle();
  })
  // GESTIONE DEL RESIZE
  // questa funzione mi permette di chiudere in automatico il menù quando si effettua un resize >= 1299px
  // ciò mi permette di non mostrare il menù aperto tramite icona, quando si superano i 1299px
  $(window).resize(function () {
    if ($(window).width() >= 1299) {
      $('#menu-bars').css({
        display: "none"
      })
    }
  })
})
