( function () {
    "use strict";

    var links = $( '.internal-link' );

    function scrollToLink ( e ) {
        e.preventDefault();
        var targetId = $( e.target ).attr( "href" );
        $( 'html, body' ).animate( {
            scrollTop: $( targetId ).offset().top
        }, 800, function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = targetId;
        } );
    }

    function linkClickEvent ( oLinks ) {
        oLinks.each( function () {
            this.addEventListener( 'click', scrollToLink, false );
        } );
    }

    linkClickEvent( links );

} ) ( jQuery );
