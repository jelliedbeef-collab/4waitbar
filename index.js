(function () {

    /* ============================================================
       REMOVE OLD INSTANCE
       ============================================================ */

    const existing = document.getElementById("fourwall-sidebar");

    if (existing) {
        existing.remove();
    }



    /* ============================================================
       HIDE ORIGINAL SILLYTAVERN UI
       ============================================================ */

    function hideOldUI() {

        const oldSidebar = document.querySelector("#top-settings-holder");
        const oldTopbar = document.querySelector("#top-bar");


        if (oldSidebar) {
            oldSidebar.style.display = "none";
        }


        if (oldTopbar) {
            oldTopbar.style.display = "none";
        }

    }


    hideOldUI();


    const observer = new MutationObserver(() => {
        hideOldUI();
    });


    observer.observe(document.body, {
        childList: true,
        subtree: true
    });



    /* ============================================================
       SIDEBAR
       ============================================================ */

    const sidebar = document.createElement("div");

    sidebar.id = "fourwall-sidebar";


    Object.assign(sidebar.style, {

        position: "fixed",

        left: "0",
        top: "0",

        width: "287px",
        height: "100vh",

        background: "#0A0A0A",

        borderRight: "1px solid rgb(23,23,23)",

        zIndex: "999999",

        display: "flex",
        flexDirection: "column",

        alignItems: "stretch",

        padding: "15px",

        boxSizing: "border-box",

        transition: "width .2s ease",

        fontFamily: "Inter, sans-serif"

    });


    /* ============================================================
       LOGO
       ============================================================ */

    const logo = document.createElement("img");

    logo.src = "img/4wallai.svg";


    Object.assign(logo.style, {

        width: "152px",

        height: "40px",

        objectFit: "contain",

        marginTop: "10px",

        marginBottom: "25px",

        transition: "all .2s ease"

    });


    sidebar.appendChild(logo);

/* ============================================================
   COLLAPSE BUTTON
   ============================================================ */

const collapse = document.createElement("div");


function setArrow(expanded) {

    if (expanded) {

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

    } else {

        collapse.innerHTML = "";

    }

}


setArrow(true);


Object.assign(collapse.style, {

    position:"absolute",

    top:"25px",

    right:"25px",

    width:"25px",

    height:"25px",

    display:"flex",

    alignItems:"center",

    justifyContent:"center",

    cursor:"pointer",

    opacity:"0.8",

    zIndex:"10"

});


sidebar.appendChild(collapse);



/* ============================================================
   COLLAPSE LOGIC
   ============================================================ */

let collapsed = false;


collapse.onclick = () => {

    collapsed = !collapsed;


    if (collapsed) {


        sidebar.style.width = "63px";


        // hide arrow visually, keep clickable
        collapse.style.opacity = "0";


        logo.src = "favicon.ico";


        Object.assign(logo.style, {

            width:"40px",
            height:"40px",
            marginLeft:"0",
            marginTop:"10px",
            marginBottom:"25px"

        });



        document
        .querySelectorAll(".fw-text")
        .forEach(text => {

            text.style.display = "none";

        });



        document
        .querySelectorAll(".fw-button")
        .forEach(button => {

            button.style.width = "47px";
            button.style.padding = "0";
            button.style.justifyContent = "center";

        });



        setArrow(false);


    } else {


        sidebar.style.width = "287px";


        collapse.style.opacity = "0.8";


        logo.src = "img/4wallai.svg";


        Object.assign(logo.style, {

            width:"152px",
            height:"40px",
            marginLeft:"0",
            marginTop:"10px",
            marginBottom:"25px"

        });



        document
        .querySelectorAll(".fw-text")
        .forEach(text => {

            text.style.display = "block";

        });



        document
        .querySelectorAll(".fw-button")
        .forEach(button => {

            button.style.width = "239px";
            button.style.padding = "0 14px";
            button.style.justifyContent = "flex-start";

        });



        setArrow(true);

    }

};


    /* ============================================================
       ICONS
       ============================================================ */

    const icons = {

        home: `
        <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">

        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>

        </svg>`,



        create: `
        <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">

        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>

        </svg>`,



        feed: `
        <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">

        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
        <path d="M18 14h-8"></path>
        <path d="M15 18h-5"></path>
        <path d="M10 6h8v4h-8V6Z"></path>

        </svg>`,



        profile: `
        <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">

        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>

        </svg>`,



        settings: `
        <svg xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">

        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>

        </svg>`

    };

 
    /* ============================================================
       BUTTON CREATOR
       ============================================================ */

    function createButton(icon, text) {

        const button = document.createElement("div");


        button.innerHTML = `

        <div class="fw-icon">
            ${icon}
        </div>

        <div class="fw-text">
            ${text}
        </div>

        `;


        Object.assign(button.style, {

            width: "239px",

            height: "36px",

            flex: "0 0 auto",

            display: "flex",

            alignItems: "center",

            padding: "0 14px",

            background: "#0A0A0A",

            borderRadius: "6px",

            cursor: "pointer",

            boxSizing: "border-box",

            color: "#ffffff",

            transition: "background .15s ease"

        });



        const iconBox = button.querySelector(".fw-icon");


        Object.assign(iconBox.style, {

            width: "20px",

            height: "20px",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            color: "#f5541d",

            flexShrink: "0"

        });



        button.querySelector(".fw-text").style.cssText = `

            margin-left:12px;

            font-size:0.85em;

            color:#ffffff;

            white-space:nowrap;

        `;



        button.onmouseenter = () => {

            button.style.background = "rgb(23,23,23)";

        };


        button.onmouseleave = () => {

            button.style.background = "#0A0A0A";

        };


        return button;

    }





    /* ============================================================
       CREATE SUBMENU
       ============================================================ */

    const createMenu = document.createElement("div");


    Object.assign(createMenu.style, {

        display: "none",

        flexDirection: "column",

        marginLeft: "15px",

        marginTop: "4px",

        marginBottom: "4px"

    });



    function addSubmenu(name, target) {


        const item = document.createElement("div");


        item.textContent = name;


        Object.assign(item.style, {

            width: "224px",

            height: "32px",

            display: "flex",

            alignItems: "center",

            paddingLeft: "12px",

            borderRadius: "6px",

            color: "#999999",

            fontSize: "14px",

            cursor: "pointer"

        });



        item.onclick = () => {

            const element = document.querySelector(target);

            if (element) {
                element.click();
            }

        };



        item.onmouseenter = () => {

            item.style.background = "rgb(23,23,23)";

        };


        item.onmouseleave = () => {

            item.style.background = "transparent";

        };


        createMenu.appendChild(item);

    }



    addSubmenu(
        "Worlds",
        "#worlds_dlg_button"
    );


    addSubmenu(
        "Characters",
        "#rm_button"
    );


    addSubmenu(
        "Personas",
        "#persona-management-button"
    );





    /* ============================================================
       MAIN BUTTONS
       ============================================================ */


    const home =
        createButton(
            icons.home,
            "Home"
        );


    const create =
        createButton(
            icons.create,
            "Create"
        );


    const feed =
        createButton(
            icons.feed,
            "Feed"
        );


    const profile =
        createButton(
            icons.profile,
            "Profile"
        );


    const settings =
        createButton(
            icons.settings,
            "Settings"
        );




    /* ============================================================
       BUTTON ACTIONS
       ============================================================ */


    create.onclick = () => {

        createMenu.style.display =
            createMenu.style.display === "flex"
            ? "none"
            : "flex";

    };



    settings.onclick = () => {

        const button =
            document.querySelector("#settings_button");


        if (button) {
            button.click();
        }

    };



    profile.onclick = () => {

        const button =
            document.querySelector("#persona-management-button");


        if (button) {
            button.click();
        }

    };





    /* ============================================================
       BUILD SIDEBAR
       ============================================================ */


    sidebar.appendChild(home);

    sidebar.appendChild(create);

    sidebar.appendChild(createMenu);

    sidebar.appendChild(feed);

    sidebar.appendChild(profile);

    sidebar.appendChild(settings);





    /* ============================================================
       COLLAPSE LOGIC
       ============================================================ */


    collapse.onclick = () => {


        collapsed = !collapsed;



        if (collapsed) {


            sidebar.style.width = "63px";


            /*
             Hide arrow but keep
             invisible clickable area
            */

            collapse.style.opacity = "0";



            logo.src = "favicon.ico";



            Object.assign(logo.style, {

                width: "40px",

                height: "40px",

                marginLeft: "1px"

            });



            document
            .querySelectorAll(".fw-text")
            .forEach(text => {

                text.style.display = "none";

            });



            document
            .querySelectorAll("#fourwall-sidebar > div")
            .forEach(element => {


                if (element !== collapse) {


                    element.style.width = "47px";

                    element.style.padding = "0";

                    element.style.justifyContent = "center";


                }

            });



            setArrow(false);


        }


        else {


            sidebar.style.width = "287px";


            collapse.style.opacity = "0.8";



            logo.src = "img/4wallai.svg";



            Object.assign(logo.style, {

                width: "152px",

                height: "40px",

                marginLeft: "0"

            });



            document
            .querySelectorAll(".fw-text")
            .forEach(text => {

                text.style.display = "block";

            });



            document
            .querySelectorAll("#fourwall-sidebar > div")
            .forEach(element => {


                element.style.width = "239px";

                element.style.padding = "0 14px";

                element.style.justifyContent = "";


            });



            setArrow(true);

        }


    };





    /* ============================================================
       INSERT
       ============================================================ */

    document.body.appendChild(sidebar);


})();
