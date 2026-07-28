(function () {

    /* ============================================================
       CLEANUP OLD VERSION
       ============================================================ */

    const old = document.getElementById("fourwall-sidebar");

    if (old) {
        old.remove();
    }



    /* ============================================================
       HIDE ORIGINAL SILLYTAVERN SIDEBAR
       ============================================================ */

    const oldSidebar = document.querySelector("#top-settings-holder");
    const oldBar = document.querySelector("#top-bar");


    if (oldSidebar) {
        oldSidebar.style.display = "none";
    }

    if (oldBar) {
        oldBar.style.display = "none";
    }



    /* ============================================================
       SIDEBAR
       ============================================================ */

    const sidebar = document.createElement("div");

    sidebar.id = "fourwall-sidebar";


    Object.assign(sidebar.style, {

        position:"fixed",

        left:"0",
        top:"0",

        width:"287px",
        height:"100vh",

        background:"#0A0A0A",

        borderRight:"1px solid rgb(23,23,23)",

        zIndex:"999999",

        display:"flex",
        flexDirection:"column",

        padding:"15px",

        boxSizing:"border-box",

        transition:"width .2s ease",

        fontFamily:"Inter, sans-serif"

    });



    let collapsed = false;



    /* ============================================================
       LOGO
       ============================================================ */

    const logo = document.createElement("img");

    logo.src = "img/4wallai.svg";


    Object.assign(logo.style, {

        width:"152px",

        height:"40px",

        objectFit:"contain",

        marginBottom:"25px",

        transition:"opacity .2s"

    });


    sidebar.appendChild(logo);




    /* ============================================================
       COLLAPSE BUTTON
       ============================================================ */


    const collapse = document.createElement("div");


    collapse.innerHTML = `

    <svg width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">

    <path d="m11 17-5-5 5-5"/>
    <path d="m18 17-5-5 5-5"/>

    </svg>

    `;


    Object.assign(collapse.style, {

        position:"absolute",

        top:"25px",

        right:"20px",

        width:"25px",

        height:"25px",

        display:"flex",

        alignItems:"center",

        justifyContent:"center",

        cursor:"pointer",

        opacity:"0.8"

    });


    sidebar.appendChild(collapse);




    /* ============================================================
       ICONS
       ============================================================ */


    const icons = {

        home:`🏠`,

        create:`＋`,

        feed:`📰`,

        profile:`👤`,

        settings:`⚙`

    };




    /* ============================================================
       BUTTON CREATOR
       ============================================================ */


    function button(icon,text){


        const b=document.createElement("div");


        b.innerHTML=`

        <span class="fw-icon">
        ${icon}
        </span>

        <span class="fw-text">
        ${text}
        </span>

        `;



        Object.assign(b.style,{

            width:"239px",

            height:"36px",

            display:"flex",

            alignItems:"center",

            padding:"0 14px",

            borderRadius:"6px",

            cursor:"pointer",

            color:"#fff",

            boxSizing:"border-box",

            transition:"background .15s"

        });



        const ic=b.querySelector(".fw-icon");

        Object.assign(ic.style,{

            width:"20px",

            display:"flex",

            color:"#f5541d"

        });



        b.querySelector(".fw-text").style.cssText=`

            margin-left:12px;

            font-size:.85em;

            white-space:nowrap;

        `;



        b.onmouseenter=()=>{

            b.style.background="rgb(23,23,23)";

        };


        b.onmouseleave=()=>{

            b.style.background="#0A0A0A";

        };


        return b;

    }





    /* ============================================================
       CREATE MENU
       ============================================================ */


    const createMenu=document.createElement("div");


    Object.assign(createMenu.style,{

        display:"none",

        flexDirection:"column",

        marginLeft:"15px"

    });



    function submenu(name,target){


        const item=document.createElement("div");


        item.textContent=name;


        Object.assign(item.style,{

            height:"32px",

            display:"flex",

            alignItems:"center",

            color:"#999",

            cursor:"pointer",

            fontSize:"14px",

            paddingLeft:"12px"

        });



        item.onclick=()=>{

            const el=document.querySelector(target);

            if(el){
                el.click();
            }
            else{
                console.log("Missing ST target:",target);
            }

        };


        createMenu.appendChild(item);

    }



    submenu("Worlds","#worlds_dlg_button");

    submenu("Characters","#rm_button");

    submenu("Personas","#persona-management-button");





    /* ============================================================
       BUTTONS
       ============================================================ */


    const home=
        button(icons.home,"Home");


    const create=
        button(icons.create,"Create");


    const feed=
        button(icons.feed,"Feed");


    const profile=
        button(icons.profile,"Profile");


    const settings=
        button(icons.settings,"Settings");




    create.onclick=()=>{

        createMenu.style.display =
        createMenu.style.display==="flex"
        ? "none"
        :"flex";

    };



    settings.onclick=()=>{

        const btn=document.querySelector("#settings_button");

        if(btn)
            btn.click();

    };



    profile.onclick=()=>{

        const btn=document.querySelector("#persona-management-button");

        if(btn)
            btn.click();

    };




    sidebar.appendChild(home);

    sidebar.appendChild(create);

    sidebar.appendChild(createMenu);

    sidebar.appendChild(feed);

    sidebar.appendChild(profile);

    sidebar.appendChild(settings);





    /* ============================================================
       COLLAPSE LOGIC
       ============================================================ */


    collapse.onclick=()=>{


        collapsed=!collapsed;


        if(collapsed){


            sidebar.style.width="72px";


            logo.style.opacity="0";


            collapse.innerHTML=`

            <svg width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2">

            <path d="m13 17 5-5-5-5"/>
            <path d="m6 17 5-5-5-5"/>

            </svg>`;


            document
            .querySelectorAll(".fw-text")
            .forEach(x=>{

                x.style.display="none";

            });


            document
            .querySelectorAll("#fourwall-sidebar > div")
            .forEach(x=>{

                if(x!==collapse){

                    x.style.width="44px";

                    x.style.padding="0";

                    x.style.justifyContent="center";

                }

            });


        }

        else{


            sidebar.style.width="287px";


            logo.style.opacity="1";


            collapse.innerHTML=`

            <svg width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2">

            <path d="m11 17-5-5 5-5"/>
            <path d="m18 17-5-5 5-5"/>

            </svg>`;



            document
            .querySelectorAll(".fw-text")
            .forEach(x=>{

                x.style.display="block";

            });



            document
            .querySelectorAll("#fourwall-sidebar > div")
            .forEach(x=>{

                x.style.width="239px";

                x.style.padding="0 14px";

                x.style.justifyContent="";

            });

        }

    };





    document.body.appendChild(sidebar);


})();
