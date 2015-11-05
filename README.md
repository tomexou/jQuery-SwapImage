# jQuery-SwapImage
jQuery plugin module for swapping image(s)


    <!-- Required! -->
    <script type="text/javascript" src="js/jquery-swapimage/5.11.6/jquery-2.1.4.min.js"></script>

    <!-- $SwapImage -->
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
    
           <ul>
            <li>
                <a href="#" title="">
                    <img class="swapImage" src="images/1.gif" alt="" width="100" height="100" data-in="images/a.gif" data-out="images/1.gif" />
                </a>
            </li>
            <li>
                <a href="#" title="">
                    <img class="swapImage" src="images/2.gif" alt="" width="100" height="100" data-in="images/b.gif" data-out="images/2.gif" />
                </a>
            </li>
           </ul>
    
