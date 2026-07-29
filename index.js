(function () {

"use strict";


/* ============================================================
   4WALL STYLE SIDEBAR EXTENSION
   PART 1/4
   ============================================================ */


const SIDEBAR_ID = "fourwall-sidebar";


/* ============================================================
   WAIT FOR SILLYTAVERN
   ============================================================ */

function waitForST(callback) {

    const timer = setInterval(() => {

        if (document.body) {

            clearInterval(timer);
            callback();

        }

    }, 100);

}


waitForST(init);



/* ============================================================
   INITIALIZE
   ============================================================ */

function init() {


    if (document.getElementById(SIDEBAR_ID)) {
        return;
    }



    hideOriginalUI();


    createSidebar();


}



/* ============================================================
   HIDE ORIGINAL SILLYTAVERN UI
   ============================================================ */

function hideOriginalUI() {


    const topbar =
        document.querySelector("#top-bar");


    if (topbar) {

        topbar.style.opacity = "0";
        topbar.style.pointerEvents = "none";

    }


    const settings =
        document.querySelector("#top-settings-holder");


    if (settings) {

        settings.style.opacity = "0";
        settings.style.pointerEvents = "none";

    }


}




/* ============================================================
   CREATE SIDEBAR
   ============================================================ */


function createSidebar() {


    let collapsed = false;



    const sidebar =
        document.createElement("div");


    sidebar.id = SIDEBAR_ID;



    Object.assign(sidebar.style, {

        position:"fixed",

        left:"0",

        top:"0",

        width:"287px",

        height:"100vh",

        background:"#0A0A0A",

        borderRight:"1px solid rgb(23,23,23)",

        zIndex:"999999",

        boxSizing:"border-box",

        padding:"15px",

        display:"flex",

        flexDirection:"column",

        alignItems:"stretch",

        transition:"width .2s ease"

    });




    /* ========================================================
       HEADER
       ======================================================== */


    const header =
        document.createElement("div");


    Object.assign(header.style, {

        height:"50px",

        width:"100%",

        display:"flex",

        alignItems:"center",

        position:"relative",

        marginBottom:"25px"

    });



    const logo =
        document.createElement("img");


    logo.src = "img/4wallai.svg";


    Object.assign(logo.style, {

        width:"152px",

        height:"40px",

        objectFit:"contain",

        transition:"all .2s ease"

    });



    header.appendChild(logo);




    /* ========================================================
       COLLAPSE BUTTON
       ======================================================== */


    const collapse =
        document.createElement("div");


    Object.assign(collapse.style, {

        position:"absolute",

        right:"25px",

        top:"25px",

        width:"25px",

        height:"25px",

        display:"flex",

        alignItems:"center",

        justifyContent:"center",

        cursor:"pointer",

        opacity:"0.8",

        zIndex:"10"

    });



    function setArrow(show) {


        if (!show) {

            collapse.innerHTML = "";
            return;

        }


        collapse.innerHTML = `

        <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">

        <path d="m11 17-5-5 5-5"/>
        <path d="m18 17-5-5 5-5"/>

        </svg>`;

    }


    setArrow(true);


    header.appendChild(collapse);



    sidebar.appendChild(header);





    /* ========================================================
       BUTTON CONTAINER
       ======================================================== */


    const buttonContainer =
        document.createElement("div");


    Object.assign(buttonContainer.style, {

        display:"flex",

        flexDirection:"column",

        gap:"4px"

    });



    sidebar.appendChild(buttonContainer);



    document.body.appendChild(sidebar);



    /* CONTINUE IN PART 2 */




    /* ========================================================
       SVG ICON HELPER
       ======================================================== */

    function icon(svg) {

        const wrapper =
            document.createElement("div");


        wrapper.innerHTML = svg.trim();


        const element =
            wrapper.firstChild;


        Object.assign(element.style, {

            width:"20px",

            height:"20px",

            flexShrink:"0",

            color:"#f5541d"

        });


        return element;

    }



    /* ========================================================
       BUTTON CREATOR
       ======================================================== */


    function createButton(name, svg) {


        const button =
            document.createElement("div");


        button.className = "fw-button";


        Object.assign(button.style, {

            width:"239px",

            height:"36px",

            flexShrink:"0",

            display:"flex",

            alignItems:"center",

            gap:"12px",

            padding:"0 14px",

            borderRadius:"6px",

            cursor:"pointer",

            color:"#fff",

            fontFamily:"Inter, sans-serif",

            fontSize:"14px",

            background:"#0A0A0A",

            boxSizing:"border-box",

            transition:"background .15s ease"

        });



        button.onmouseenter = () => {

            button.style.background =
                "rgb(23,23,23)";

        };


        button.onmouseleave = () => {

            button.style.background =
                "#0A0A0A";

        };



        const text =
            document.createElement("span");


        text.className = "fw-text";

        text.textContent = name;



        button.appendChild(icon(svg));

        button.appendChild(text);


        buttonContainer.appendChild(button);


        return button;

    }



    /* CONTINUE IN PART 2 */

    /* ============================================================
   BUTTON ICONS
   ============================================================ */


const homeIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
</svg>`;


const createIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round">
<path d="M5 12h14"/>
<path d="M12 5v14"/>
</svg>`;


const feedIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round">
<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
<path d="M18 14h-8"/>
<path d="M15 18h-5"/>
<path d="M10 6h8v4h-8V6Z"/>
</svg>`;


const profileIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
<circle cx="12" cy="7" r="4"/>
</svg>`;


const settingsIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
<circle cx="12" cy="12" r="3"/>
</svg>`;





/* ============================================================
   CREATE BUTTONS
   ============================================================ */


const home =
    createButton("Home", homeIcon);


const create =
    createButton("Create", createIcon);


const feed =
    createButton("Feed", feedIcon);


const profile =
    createButton("Profile", profileIcon);


const settings =
    createButton("Settings", settingsIcon);






/* ============================================================
   CREATE SUBMENU
   ============================================================ */


const createMenu =
    document.createElement("div");


Object.assign(createMenu.style, {

    display:"none",

    flexDirection:"column",

    gap:"4px",

    marginLeft:"20px",

    marginTop:"4px"

});


buttonContainer.insertBefore(
    createMenu,
    feed
);





function createSubButton(name, callback) {


    const btn =
        document.createElement("div");


    btn.className="fw-sub-button";


    Object.assign(btn.style, {

        width:"219px",

        height:"32px",

        display:"flex",

        alignItems:"center",

        paddingLeft:"14px",

        borderRadius:"6px",

        cursor:"pointer",

        color:"#999",

        fontFamily:"Inter",

        fontSize:"13px"

    });


    btn.textContent=name;



    btn.onmouseenter = () => {

        btn.style.background="rgb(23,23,23)";

    };


    btn.onmouseleave = () => {

        btn.style.background="transparent";

    };


    btn.onclick=callback;


    createMenu.appendChild(btn);


}




/* ============================================================
   SILLYTAVERN DRAWER FINDER
   ============================================================ */


function openDrawer(searchTerms) {


    const elements =
        Array.from(document.querySelectorAll("*"));


    const found =
        elements.find(el => {


            const text =
                (
                    el.innerText ||
                    el.title ||
                    ""
                ).toLowerCase();


            return searchTerms.some(term =>
                text.includes(term)
            );


        });



    if(found) {

        found.click();
        return true;

    }


    return false;

}





/* ============================================================
   CREATE MENU ITEMS
   ============================================================ */


createSubButton(
    "Worlds",
    () => {

        openDrawer([
            "world"
        ]);

    }
);


createSubButton(
    "Characters",
    () => {

        openDrawer([
            "character"
        ]);

    }
);


createSubButton(
    "Personas",
    () => {

        openDrawer([
            "persona"
        ]);

    }
);





/* ============================================================
   SETTINGS MENU
   ============================================================ */


const settingsMenu =
    document.createElement("div");


Object.assign(settingsMenu.style, {

    display:"none",

    flexDirection:"column",

    gap:"4px",

    marginTop:"4px"

});


buttonContainer.appendChild(settingsMenu);





function populateSettings() {


    settingsMenu.innerHTML="";


    const drawers =
        document.querySelectorAll(
            "#top-settings-holder > *"
        );


    drawers.forEach(item => {


        const clone =
            item.cloneNode(true);


        Object.assign(clone.style, {

            width:"239px",

            height:"36px"

        });


        clone.onclick = () => {

            item.click();

        };


        settingsMenu.appendChild(clone);


    });


}



settings.onclick = () => {


    if(settingsMenu.style.display==="flex") {

        settingsMenu.style.display="none";

    }

    else {

        populateSettings();

        settingsMenu.style.display="flex";

    }

};





/* ============================================================
   CREATE BUTTON TOGGLE
   ============================================================ */


create.onclick = () => {


    createMenu.style.display =
        createMenu.style.display==="flex"
        ? "none"
        : "flex";


};




/* CONTINUE IN PART 3 */


    /* ============================================================
   COLLAPSE / EXPAND LOGIC
   ============================================================ */


let isCollapsed = false;



collapse.onclick = () => {


    isCollapsed = !isCollapsed;



    if (isCollapsed) {


        /* --------------------------------------------
           COLLAPSED
           -------------------------------------------- */


        sidebar.style.width = "63px";



        // hide arrow but preserve click area
        collapse.style.opacity = "0";



        // swap logo
        logo.src = "favicon.ico";



        Object.assign(logo.style, {

            width:"40px",

            height:"40px",

            marginLeft:"0"

        });



        // hide text

        document
        .querySelectorAll(".fw-text")
        .forEach(text => {

            text.style.display="none";

        });



        // resize buttons

        document
        .querySelectorAll(".fw-button")
        .forEach(button => {

            button.style.width="47px";

            button.style.padding="0";

            button.style.justifyContent="center";

        });



        // hide submenus

        createMenu.style.display="none";

        settingsMenu.style.display="none";



        // hide submenu text

        document
        .querySelectorAll(".fw-sub-button")
        .forEach(button => {

            button.style.display="none";

        });



        setArrow(false);



    }

    else {



        /* --------------------------------------------
           EXPANDED
           -------------------------------------------- */


        sidebar.style.width="287px";



        collapse.style.opacity="0.8";



        logo.src="img/4wallai.svg";



        Object.assign(logo.style, {

            width:"152px",

            height:"40px",

            marginLeft:"0"

        });




        document
        .querySelectorAll(".fw-text")
        .forEach(text => {

            text.style.display="block";

        });





        document
        .querySelectorAll(".fw-button")
        .forEach(button => {

            button.style.width="239px";

            button.style.padding="0 14px";

            button.style.justifyContent="flex-start";

        });





        document
        .querySelectorAll(".fw-sub-button")
        .forEach(button => {

            button.style.display="flex";

        });



        setArrow(true);


    }



};





/* ============================================================
   KEEP COLLAPSE BUTTON ALIGNED
   ============================================================ */


window.addEventListener(
"resize",
()=>{


    collapse.style.right="25px";

    collapse.style.top="25px";


});





/* ============================================================
   ENSURE SIDEBAR STAYS ABOVE ST
   ============================================================ */


const observer =
new MutationObserver(()=>{


    sidebar.style.zIndex="999999";

});


observer.observe(
document.body,
{
    childList:true,
    subtree:true
});





/* ============================================================
   CLEANUP OLD TOPBAR VISIBILITY
   ============================================================ */


setInterval(()=>{


    const oldBar =
    document.querySelector("#top-bar");


    if(oldBar) {

        oldBar.style.opacity="0";

        oldBar.style.pointerEvents="none";

    }



},1000);





/* ============================================================
   INITIAL STATE
   ============================================================ */


setArrow(true);



}

 /* ============================================================
   PART 4/4
   FINAL POLISH + SILLYTAVERN COMPATIBILITY
   ============================================================ */


/* ============================================================
   FIX SETTINGS MENU
   ============================================================

   The previous version cloned the topbar items.
   This version instead keeps references to the real
   SillyTavern controls and triggers them directly.

   ============================================================ */


function rebuildSettingsMenu() {


    settingsMenu.innerHTML = "";


    const holder =
        document.querySelector("#top-settings-holder");


    if (!holder) {
        return;
    }



    Array.from(holder.children)
    .forEach(item => {


        const label =
            item.innerText ||
            item.title ||
            "Settings";



        const btn =
            document.createElement("div");


        btn.className =
            "fw-settings-button";



        Object.assign(btn.style, {


            width:"239px",

            height:"36px",

            display:"flex",

            alignItems:"center",

            padding:"0 14px",

            borderRadius:"6px",

            background:"#0A0A0A",

            color:"#ffffff",

            cursor:"pointer",

            fontFamily:"Inter, sans-serif",

            fontSize:"14px",

            boxSizing:"border-box"

        });



        btn.textContent =
            label.trim();



        btn.onmouseenter = () => {

            btn.style.background =
                "rgb(23,23,23)";

        };


        btn.onmouseleave = () => {

            btn.style.background =
                "#0A0A0A";

        };



        btn.onclick = () => {

            item.click();

        };



        settingsMenu.appendChild(btn);



    });


}





settings.onclick = () => {


    if(settingsMenu.style.display==="flex") {


        settingsMenu.style.display="none";


    }

    else {


        rebuildSettingsMenu();


        settingsMenu.style.display="flex";


    }


};






/* ============================================================
   PROFILE BUTTON
   ============================================================ */


profile.onclick = () => {


    openDrawer([
        "persona"
    ]);


};






/* ============================================================
   FEED BUTTON
   ============================================================ */


feed.onclick = () => {


    // reserved for future 4Wall feed


};






/* ============================================================
   HOME BUTTON
   ============================================================ */


home.onclick = () => {


    // visual only


};






/* ============================================================
   ADD CSS OVERRIDES
   ============================================================ */


const style =
document.createElement("style");


style.textContent = `


#fourwall-sidebar svg {

    color:#f5541d;

}


#fourwall-sidebar .fw-button,
#fourwall-sidebar .fw-settings-button {

    user-select:none;

}


#fourwall-sidebar {

    overflow:hidden;

}


#fourwall-sidebar * {

    scrollbar-width:none;

}


#fourwall-sidebar *::-webkit-scrollbar {

    display:none;

}


`;



document.head.appendChild(style);






/* ============================================================
   OBSERVE SILLYTAVERN LOADING
   ============================================================ */


const stObserver =
new MutationObserver(()=>{


    const top =
    document.querySelector("#top-bar");


    if(top) {

        top.style.opacity="0";

        top.style.pointerEvents="none";

    }



});



stObserver.observe(
document.body,
{
    childList:true,
    subtree:true
});






/* ============================================================
   EXTENSION READY
   ============================================================ */


console.log(
    "%c4Wall sidebar loaded",
    "color:#f5541d;font-weight:bold;"
);



})();
