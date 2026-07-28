(function () {

    /* ============================================================
       4WALL STYLE SIDEBAR NAVIGATION
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

        padding: "90px 15px",

        boxSizing: "border-box",

        gap: "4px",

        fontFamily: "Inter, sans-serif"

    });



    /* ============================================================
       SVG ICONS
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

        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>

        </svg>`,



        plus: `
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

        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Z"/>
        <path d="M18 14h-8"/>
        <path d="M15 18h-5"/>
        <path d="M10 6h8v4h-8V6Z"/>

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

        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>

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

        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>

        <circle cx="12" cy="12" r="3"/>

        </svg>`
    };



    /* ============================================================
       BUTTON CREATOR
       ============================================================ */


    function createButton(icon,label){


        const button = document.createElement("div");


        button.innerHTML = `

            <div class="fw-icon">
                ${icon}
            </div>

            <div class="fw-label">
                ${label}
            </div>

        `;



        Object.assign(button.style, {

            width:"239px",

            height:"36px",

            flex:"0 0 auto",

            display:"flex",

            alignItems:"center",

            padding:"0 14px",

            background:"#0A0A0A",

            borderRadius:"6px",

            boxSizing:"border-box",

            cursor:"pointer",

            color:"#ffffff",

            overflow:"hidden",

            transition:"background .15s ease"

        });



        button.querySelector(".fw-icon").style.cssText = `

            width:20px;
            height:20px;

            display:flex;
            align-items:center;
            justify-content:center;

            color:#f5541d;

            flex-shrink:0;

        `;



        button.querySelector(".fw-label").style.cssText = `

            margin-left:12px;

            color:#ffffff;

            font-size:0.85em;

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

        display:"none",

        flexDirection:"column",

        marginLeft:"15px",

        marginTop:"4px",

        marginBottom:"4px"

    });



    [
        "Worlds",
        "Characters",
        "Personas"

    ].forEach(name => {


        const item = document.createElement("div");


        item.textContent = name;


        Object.assign(item.style, {

            width:"224px",

            height:"32px",

            display:"flex",

            alignItems:"center",

            paddingLeft:"14px",

            borderRadius:"6px",

            color:"#999999",

            cursor:"pointer",

            fontSize:"0.85em"

        });



        item.onmouseenter = () => {

            item.style.background="rgb(23,23,23)";

        };


        item.onmouseleave = () => {

            item.style.background="transparent";

        };


        item.onclick = () => {

            console.log("Open:", name);

        };


        createMenu.appendChild(item);

    });




    /* ============================================================
       CREATE BUTTONS
       ============================================================ */


    const home =
        createButton(icons.home,"Home");


    const create =
        createButton(icons.plus,"Create");


    const feed =
        createButton(icons.feed,"Feed");


    const profile =
        createButton(icons.profile,"Profile");


    const settings =
        createButton(icons.settings,"Settings");




    create.onclick = () => {


        createMenu.style.display =
            createMenu.style.display === "flex"
            ? "none"
            : "flex";


    };




    /* ============================================================
       BUILD
       ============================================================ */


    sidebar.appendChild(home);

    sidebar.appendChild(create);

    sidebar.appendChild(createMenu);

    sidebar.appendChild(feed);

    sidebar.appendChild(profile);

    sidebar.appendChild(settings);



    document.body.appendChild(sidebar);



})();
