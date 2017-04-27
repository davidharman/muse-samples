////
// @author David Harman, IBM
// @name Homepage Customization
// @version 0.1
// @date April, 2017
//
if(typeof(dojo) != "undefined") {
    dojo.place(
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"//files/muse-static/samples/myfolder/mine.css\"></link>",
        dojo.doc.head,
        "last"
    );
}
