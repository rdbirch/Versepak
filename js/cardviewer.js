"debugger";

$(document).ready(function() {

    function getChildren($row, $cell) {
        var children = [], level = $row.attr('data-level');
/*
        while($row.next().attr('variation') == ''
        || $row.next().attr('variation') == '') {
*/
        while($row.next().attr('data-level') > level) {
             children.push($row.next());
             $row = $row.next();
        }            
        return children;
    }        

    $('.parent').on('click', function() {
    
        var children = getChildren($(this), $(this));
        $.each(children, function() {
            $(this).toggle();
        })
    });
    
})

function toggle_card($button) {
    var id = $button.id;
    var cell = $button.parentNode;
    var row = cell.parentNode;
    var next = row.nextElementSibling;

    /* If turning off a Chinese version, turn off the *-pinyin version as well */
    while ( next != null && next.className == 'card-content' ) {
        if ( next.id == id && next.style.display != 'none' ) {
            while ( next != null && next.className == 'card-content' ) {
                if ( next.id == id+'-pinyin' &&  next.style.display != 'none' ) {
                    next.style.display = 'none';
                }
                next = next.nextElementSibling;
            }
        }
        else {
            next = next.nextElementSibling;
        }
    }

    next = row.nextElementSibling;
    while ( next != null && next.className == 'card-content' ) {
        if ( next.id == id ) {
            if ( next.style.display == 'none' ) {
                next.style.display = '';
            }
            else {
                next.style.display = 'none';
            }
        }
        next = next.nextElementSibling;
    }

    if ( $button.className == 'selected' ) {
        $button.className = '';
        /* TODO -- just changing the className doesn't have any effect */
        $button.style.borderStyle = "outset";
    }
    else {
        $button.className = 'selected';
        /* TODO -- just changing the className doesn't have any effect */
        $button.style.borderStyle = "inset";
    }

}

