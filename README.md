# jQuery-SwapImage v5.11.6
jQuery plugin module for swapping images when mouse cursor hover image in or out.

<img src="https://raw.githubusercontent.com/tomexou/jQuery-SwapImage/master/screenshot.gif" />

See the "index.html" to demo and get the tutorials.


# JavaScript

    <!-- Required, based on jQuery 1.x or 2.x -->
    <script type="text/javascript" src="js/jquery-swapimage/5.11.6/jquery-2.1.4.min.js"></script>

    <!-- Module: $SwapImage -->
    <script type="text/javascript" src="js/jquery-swapimage/5.11.6/jquery-swapimage.min.js"></script>
    
    <script type="text/javascript">
    $(function() {

        // Preload images and bind swapping events.
        $SwapImage.bindHoverEvents($('.swapImage'));

        // // If want to specify the custom attributes and settings.
        // $SwapImage.bindHoverEvents($('.swapImage'), { 
        //     attrIn: 'data-in', 
        //     attrOut: 'data-out', 
        //     preloadImages: true 
        // });

    });
    </script>
    

# HTML

    <a href="#" title="">
        <img class="swapImage" src="images/1.gif" alt="" width="100" height="100" 
            data-in="images/a.gif" 
            data-out="images/1.gif" 
            />
    </a>


# Release History
* 2015-11-06 First release.
