import * as MODEL from "../model/model.js";

function init() {
    $("nav .links a").click(function(e){
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log("clicked " + btnId);

        if(btnId === "home") {
            //display the white navbar and hero content on the home page
            $("nav").removeClass(`black-nav`);
            $("nav").addClass(`white-nav`);
            $(".black-logo").css("display", "none");
            $(".white-logo").css("display", "block");
            $(".hero").addClass(`hero-image`);
            $(".hero-content").css("display", "block");
            MODEL.getPageContent(contentId);
        } else {
            //on all other pages display a black navbar and no hero content
            $("nav").removeClass(`white-nav`);
            $("nav").addClass(`black-nav`);
            $(".black-logo").css("display", "block");
            $(".white-logo").css("display", "none");
            $(".hero").removeClass(`hero-image`);
            $(".hero-content").css("display", "none");
            MODEL.getPageContent(contentId);
        }

        //get the id's for the divs on the gallery page and links to their respective pages
        $(".gallery-row div").click(function(e){
            let galleryBtnId = this.id;
            MODEL.getPageContent(galleryBtnId);
        })

        //get the id's for the posts on the blog page and link to their respective pages
        $(".blog-list div").click(function(e){
            let blogBtnId = this.id;
            MODEL.getPageContent(blogBtnId);
        })
    })
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
})