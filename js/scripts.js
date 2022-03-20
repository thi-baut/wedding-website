$(document).ready(function () {

    /***************** Translation ******************/
    var set_locale_to = function (locale) {
        if (locale){
            $.i18n().locale = locale;
        }
        else{
            var userLang = navigator.language || navigator.userLanguage;
            $.i18n().locale = userLang.split('-')[0];
        }
    };

    $.i18n().load({
        'en': {
            'event': 'Program & Events',
            'eng': 'Photos',
            'list': 'Wedding Registry',
            'location': 'Location & Venue',
            'intro-header': 'We are getting married!',
            'intro-s1': 'The date is the ',
            'intro-s2': '23rd of July 2022',
            'intro-s3': 'and we would like you to be a part of it.',
            'intro-s4': 'The ceremony will be in Prince Edward County, Ontario, Canada. Please RSVP below',
            'intro-s5': 'Canada welcomes fully vaccinated travellers with no quarantine, you just need to take a PCR test before your trip. Latest guidelines are available on ',
            'intro-s6': 'the government website',
            'intro-s7': 'There are many accomodation options in Prince Edward Country. Accomodation is available close to the venue on ',
            'intro-s8': 'this website.',
            'intro-s9': 'Other closeby options are the ',
            'intro-s10': 'and the',
            'intro-s11': '. There are also many airbnbs and boutique hotels in the area - we encourage you to explore!',
            'intro-s12': 'Further details regarding shuttle service to and from the venue will be provided closer to the date.',
            'eng-header': 'Pictures',
            'map-header': 'How do I get there?',
            'map-subheader': 'It\'s easier than you think!',
            'map-show': 'Show map',
            'rsvp-yes-header': 'Thank you!',
            'rsvp-yes-button': 'Yes, I\'ll come!',
            'rsvp-no-button': 'No, I can\'t make it',
            'rsvp-submit': 'Submit',
            'rsvp-yes-sentence': 'We are glad to see you join us on our big day.',
            'rsvp-no-header': 'Thank you for responding',
            'rsvp-no-sentence': 'We are sad you can\'t make it!',
            'rsvp-header': 'What are you waiting for?',
            'rsvp-sentence': 'We would greatly appreciate if you could RSVP as soon as possible using the form below.',
            'rsvp-questions': 'If you need to chat, have special food requests/allergies or have questions please email us at ',
            'list-s1': 'We don\'t have an official wedding registry, we plan to do a trip after our big day.',
            'list-s2': 'We would like to receive donations through eTransfer (Interac) at lillian.thibaut@gmail.com or cash ($ or €) on the wedding day.',
            'insta-header': 'A picture is worth a thousand words!',
            'insta-s1': 'Help us capture the moment, tag your photos with the hashtag',
            'footer-credits': 'Website inspired by ',
            'footer-github-url': 'this Github template',
            'event-dresscode-header': 'Ugh... dress codes?',
            'event-dresscode': 'Dress for a summer garden party!',
            'event-date': '23rd of July',
            'event-e1-header': 'Welcome Drink',
            'event-e1-desc': 'Please arrive no later than 3:30PM. Parking is available on site. ',
            'event-e2-header': 'Wedding Ceremony ',
            'event-e2-desc': 'This is the official ceremony where vows and rings will be exchanged.',
            'event-e3-header': 'Garden Reception ',
            'event-e3-desc': 'Following the ceremony, we will have a small reception.',
            'event-e4-header': 'Dinner ',
            'event-e4-desc': 'Sit down dinner at the tables in the garden if weather permits - location to be determined, either on site or at a restaurant nearby',
        },
        'fr': {
            'event': 'Programme',
            'eng': 'Photos',
            'list': 'Liste de Mariage',
            'location': 'Lieu / C\'est où ?',
            'intro-header': 'Nous nous marions !',
            'intro-s1': 'Le mariage aura lieu le ',
            'intro-s2': 'samedi 23 Juillet 2022',
            'intro-s3': 'et nous aimerions que vous soyez des nôtres !',
            'intro-s4': 'La cérémonie sera au Canada, en Ontario, dans le comté de Prince Edward. S\'il vous plaît repondez avec le formulaire ci-dessous',
            'intro-s5': 'Le Canada accueille les voyageurs étrangers vaccinés (3 doses) qui présentent leurs preuve de vaccination et un test PCR récent. Les consignes sont publiées et mises à jour sur ',
            'intro-s6': 'le site du gouvernement',
            'intro-s7': 'Il y a plusieurs options d\'hébergement dans le comté de Prince Edward. Un hébergement peut être réservé dans le complexe adjacent ',
            'intro-s8': 'sur ce site.',
            'intro-s9': 'Les autres options sont le ',
            'intro-s10': 'et le',
            'intro-s11': '. Il y a plusieurs Airbnb et des petits hôtels dans la région.',
            'intro-s12': 'Plus de détails à propos du service de navette depuis le lieu de cérémonie seront fournis lorsque nous serons proches de la date du mariage.',
            'eng-header': 'Photos',
            'map-header': 'Comment s\'y rendre ?',
            'map-subheader': 'C\'est plus facile que vous l\'imaginez !',
            'map-show': 'Afficher la carte',
            'rsvp-yes-header': 'Merci !',
            'rsvp-yes-button': 'Oui, je viens !',
            'rsvp-no-button': 'Non, je ne viens pas',
            'rsvp-submit': 'Envoyer',
            'rsvp-yes-sentence': 'Merci, nous nous verrons lors de notre grand jour !',
            'rsvp-no-header': 'Merci pour votre réponse',
            'rsvp-no-sentence': 'Nous sommes tristes que vous ne pouviez pas venir !',
            'rsvp-header': 'Qu\'est-ce que vous attendez ?',
            'rsvp-sentence': 'Nous serions très reconnaissants si vous nous répondiez en utilisant le formulaire ci-dessous.',
            'rsvp-questions': 'Si vous avez des questions svp envoyez-nous un courriel à ',
            'list-s1': 'Nous n\'avons pas de liste officielle, nous prévoyons de faire un voyage après notre mariage.',
            'list-s2': 'Vous pouvez participer par eTransfer (Interac) à lillian.thibaut@gmail.com ou en liquide ($ ou €) sur place.',
            'insta-header': 'Une image vaut mille mots !',
            'insta-s1': 'Aidez-nous à capturer ce moment, utilisez le hashtag suivant sur Instagram :',
            'footer-credits': 'Site inspiré par ',
            'footer-github-url': 'ce template sur Github',
            'event-dresscode-header': 'Dress code, quelle tenue ?',
            'event-dresscode': '"Summer Garden Party" : des vêtements de préférence colorés et d\'inspiration estivale !',
            'event-date': '23 Juillet',
            'event-e1-header': 'Boisson de bienvenue',
            'event-e1-desc': 'Svp arrivez au plus tard à 3:30 PM, un stationement sera disponible sur place. ',
            'event-e2-header': 'Cérémonie de Mariage ',
            'event-e2-desc': 'C\'est la cérémonie officielle ou les voeux seront prononcés et les alliances échangées.',
            'event-e3-header': 'Garden Reception ',
            'event-e3-desc': 'Suivant la cérémonie, nous aurons une petite récéption.',
            'event-e4-header': 'Diner ',
            'event-e4-desc': 'Diner à table dans le jardin du lieu de cérémonie si le temps le permets, ou à un restaurant du coin - à déterminer.',
        }
    }).done(function () {
        set_locale_to(url('?locale'));
        History.Adapter.bind(window, 'statechange', function () {
            set_locale_to(url('?locale'));
        });
        $('.switch-locale').on('click', 'a', function (e) {
            e.preventDefault();
            History.pushState(null, null, "?locale=" + $(this).data('locale'));
        });
    });

    $('body').i18n();

    /***************** Waypoints ******************/
    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';
        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Lillian and Thibaut's Wedding",

            // Event start date
            start: new Date('Jul 23, 2021 11:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Jul 23, 2021 23:00'),

            // Event Address
            address: 'Lake on the Mountain, Ontario',

            // Event Description
            description: "We can't wait to see you on our big day. For any queries or issues, please contact us by email!"
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

        if (MD5($('#invite_code').val()) !== '192f24da6359c2da9abc228df6a7b5a3') {
            $('#alert-wrapper').html(alert_markup('danger', 'Webapp : <strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbwKSkZSGp4LXvL6aSairdiyiLF1TzKX47l7STbphrg0toqnj8Av/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
        }
    });

    $('#rsvp-form2').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper2').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

        if (MD5($('#invite_code2').val()) !== '192f24da6359c2da9abc228df6a7b5a3') {
            $('#alert-wrapper2').html(alert_markup('danger', 'Webapp : <strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbwKSkZSGp4LXvL6aSairdiyiLF1TzKX47l7STbphrg0toqnj8Av/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper2').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper2').html('');
                        $('#rsvp-modal-declined').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper2').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
        }
    });

});

/********************** Extras **********************/

// Google map
function initMap() {
    var location = {lat: 44.03990330737003, lng: -77.05593300762217};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 44.03990330737003, lng: -77.05593300762217};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};