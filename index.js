(function () {

    /* ============================================================
       4WALL STYLE SIDEBAR
       ============================================================ */


    const sidebar = document.createElement("div");
    sidebar.id = "fourwall-sidebar";


    Object.assign(sidebar.style, {
        position: "fixed",
        left: "0",
        top: "0",
        width: "230px",
        height: "100vh",

        background:"#0A0A0A",
        borderRight:"1px solid rgb(23,23,23)",

        zIndex:"999999",
        pointerEvents:"auto",

        display:"flex",
        flexDirection:"column",

        padding:"20px 12px",
        boxSizing:"border-box",

        fontFamily:"Inter, sans-serif"
    });



    /* ============================================================
       ICONS
       ============================================================ */

    const icons = {

        home:`<svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`,

        plus:`<svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"/>
        <path d="M12 5v14"/>
        </svg>`,

        feed:`<svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Z"/>
        <path d="M18 14h-8"/>
        <path d="M15 18h-5"/>
        </svg>`,

        profile:`<svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        </svg>`,

        settings:`<svg width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.18.61.74 1 1.37 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
        </svg>`
    };



    /* ============================================================
       BUTTON CREATOR
       ============================================================ */

    function makeButton(icon,label){

        const button=document.createElement("div");

        button.innerHTML=`
            <div class="fw-icon">${icon}</div>
            <div class="fw-label">${label}</div>
        `;


        Object.assign(button.style,{
            width:"100%",
            height:"44px",

            display:"flex",
            alignItems:"center",
            gap:"14px",

            padding:"0 14px",

            color:"#ffffff",

            borderRadius:"8px",

            cursor:"pointer",

            userSelect:"none",

            boxSizing:"border-box",

            transition:"background .15s"
        });


        button.onmouseenter=()=>{
            button.style.background="#171717";
        };

        button.onmouseleave=()=>{
            button.style.background="transparent";
        };


        button.querySelector(".fw-icon").style.color="#f5541d";


        return button;
    }



    /* ============================================================
       CREATE MENU
       ============================================================ */

    const createMenu=document.createElement("div");

    Object.assign(createMenu.style,{
        display:"none",
        flexDirection:"column",
        marginLeft:"30px",
        marginBottom:"8px"
    });


    ["Worlds","Characters","Personas"].forEach(name=>{

        const item=document.createElement("div");

        item.textContent=name;

        Object.assign(item.style,{
            color:"#999",
            height:"32px",
            display:"flex",
            alignItems:"center",
            cursor:"pointer",
            fontSize:"14px"
        });


        item.onclick=()=>{
            console.log("Open:",name);
        };


        createMenu.appendChild(item);

    });



    const home=makeButton(icons.home,"Home");

    const create=makeButton(icons.plus,"Create");

    const feed=makeButton(icons.feed,"Feed");

    const profile=makeButton(icons.profile,"Profile");

    const settings=makeButton(icons.settings,"Settings");



    create.onclick=()=>{

        createMenu.style.display =
            createMenu.style.display==="flex"
            ? "none"
            : "flex";

    };



    sidebar.appendChild(home);
    sidebar.appendChild(create);
    sidebar.appendChild(createMenu);

    sidebar.appendChild(feed);
    sidebar.appendChild(profile);



    const spacer=document.createElement("div");
    spacer.style.flex="1";

    sidebar.appendChild(spacer);

    sidebar.appendChild(settings);



    document.body.appendChild(sidebar);


})();
