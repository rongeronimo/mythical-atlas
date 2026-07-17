/* Rendering */
function initTimeline() {

    const lenis = new Lenis({ smooth: true });
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    const timeLineRoot = document.querySelector('[data-app="timeline"]');
    if (!timeLineRoot) return;

    const panelsList = timeLineRoot.querySelector("[data-panels]");
    const countryRail = timeLineRoot.querySelector(
        '[data-timeline= "country-wrapper"]',
    );
    if (!panelsList || !countryRail) return;

    // Data
    const timelineItems = [
        {
            id: "TekeTeke",
            country: "JPN",
            theme: "teketheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-left",
                    w: "25vw",
                    ratio: "16 / 9",
                    src: "assets/img/teketeke.jpg",
                    alt: "Teke-Teke",
                    depth: 10,
                    z: 1,
                },
                {
                    type: "text",
                    pos: "pos-bottom-right",
                    w: "600px",
                    ratio: "16 / 9",
                    heading: "Teke-Teke",
                    flag: "assets/flags/jp.svg",
                    copy: "An urban legend about a vengeful spirit that drags itself on its hands after being cut in half. It chases people at night and is said to kill those it catches.",
                    depth: 20,
                    z: 4,
                },
                {
                    type: "image",
                    pos: "pos-top-right-10",
                    w: "250px",
                    ratio: "9 / 16",
                    src: "assets/img/teketeke2.png",
                    alt: "Teke-Teke2",
                    depth: 5,
                    z: 2,
                },
                {
                    type: "video",
                    pos: "pos-top-left-10",
                    w: "22vw",
                    ratio: "16 / 9",
                    src: "assets/video/teketeke.mp4",
                    poster: "assets/img/teketekeposter.jpg",
                    depth: 25,
                    z: 1,
                },
            ],
        },
        {
            id: "Penanggalan",
            country: "MYS",
            theme: "penangtheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-right-10",
                    w: "25vw",
                    ratio: "16 / 9",
                    src: "assets/img/penanggalan2.jpg",
                    alt: "Penanggalan",
                    depth: 15,
                    z: 1,
                },
                {
                    type: "video",
                    pos: "pos-top-right-10",
                    w: "430px",
                    ratio: "16 / 9",
                    src: "assets/video/penanggalan.mp4",
                    poster: "assets/img/penanggalanposter.jpg",
                    alt: "Penanggalan",
                    depth: 10,
                    z: 2,
                },
                {
                    type: "image",
                    pos: "pos-top-left",
                    w: "300px",
                    ratio: "9 / 16",
                    src: "assets/img/penanggalan.png",
                    alt: "Penanggalan2",
                    depth: 30,
                    z: 3,
                },
                {
                    type: "text",
                    pos: "pos-bottom-left",
                    w: "500px",
                    ratio: "16 / 9",
                    heading: "Penanggalan",
                    flag: "assets/flags/my.svg",
                    copy: "A folklore creature depicted as a flying female head with dangling organs. It hunts at night, feeding on blood and preying on pregnant women and newborns.",
                    depth: 25,
                    z: 4,
                },
            ],
        },
        {
            id: "Skinwalkers",
            country: "USA",
            theme: "skintheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-left-10-916",
                    w: "15vw",
                    ratio: "9 / 16",
                    src: "assets/img/skinwalker.jpg",
                    alt: "Skinwwalker",
                    depth: 15,
                    z: 1,
                },
                {
                    type: "video",
                    pos: "pos-bottom-right-vid",
                    w: "480px",
                    ratio: "16 / 9",
                    src: "assets/video/skinwalker.mp4",
                    poster: "assets/img/skinposter.jpg",
                    alt: "Skinwalker",
                    depth: 5,
                    z: 2,
                },
                {
                    type: "image",
                    pos: "pos-top-right-10",
                    w: "400px",
                    ratio: "16 / 9",
                    src: "assets/img/skinwalker2.jpg",
                    alt: "Skinwalker",
                    depth: 20,
                    z: 1,
                },
                {
                    type: "text",
                    pos: "pos-top-left-10",
                    w: "450px",
                    ratio: "1 / 1",
                    heading: "Skinwalkers",
                    flag: "assets/flags/us.svg",
                    copy: "A folklore creature known for its ability to shapeshift into animals. It uses its powers to stalk, deceive, and terrorize its victims.",
                    depth: 10,
                    z: 2,
                },      
            ],
        },
        {
            id: "La Llorona",
            country: "MEX",
            theme: "lloronatheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-right",
                    w: "14vw",
                    ratio: "9 / 16",
                    src: "assets/img/lallorona.jpg",
                    alt: "La Llorona",
                    depth: 30,
                    z: 1,
                },
                {
                    type: "image",
                    pos: "pos-top-left-15",
                    w: "20vw",
                    ratio: "16 / 9",
                    src: "assets/img/lallorona2.png",
                    alt: "La Llorona",
                    depth: 20,
                    z: 2,
                },
                {
                    type: "video",
                    pos: "pos-bottom-left-vid",
                    w: "25vw",
                    ratio: "16 / 9",
                    src: "assets/video/lallorona.mp4",
                    poster: "assets/img/lalloronaposter.jpg",
                    alt: "La Llorona",
                    depth: 10,
                    z: 2,
                },
                {
                    type: "text",
                    pos: "pos-top-right-10",
                    w: "500px",
                    ratio: "16 / 9",
                    heading: "La Llorona",
                    flag: "assets/flags/mx.svg",
                    copy: "A folklore spirit portrayed as a weeping ghost who wanders near rivers and waterways.She lures unsuspecting people, especially children, to their doom.",
                    depth: 25,
                    z: 4,
                },
            ],
        },
        {
            id: "Wendigo",
            country: "CAN",
            theme: "wendigotheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-left",
                    w: "25vw",
                    ratio: "16 / 9",
                    src: "assets/img/wendigo.jpg",
                    alt: "Wendigo",
                    depth: 10,
                    z: 1,
                },
                {
                    type: "text",
                    pos: "pos-bottom-right",
                    w: "600px",
                    ratio: "16 / 9",
                    heading: "Wendigo",
                    flag: "assets/flags/ca.svg",
                    copy: "A folklore creature associated with insatiable hunger and cannibalism. It relentlessly hunts humans and grows stronger the more it consumes.",
                    depth: 20,
                    z: 4,
                },
                {
                    type: "image",
                    pos: "pos-top-right-10",
                    w: "270px",
                    ratio: "9 / 16",
                    src: "assets/img/wendigo2.jpg",
                    alt: "Wendigo",
                    depth: 5,
                    z: 2,
                },
                {
                    type: "video",
                    pos: "pos-top-left-10",
                    w: "24vw",
                    ratio: "16 / 9",
                    src: "assets/video/wendigo.mp4",
                    poster: "assets/img/wendigoposter.jpg",
                    depth: 25,
                    z: 1,
                },
            ],
        },
        {
            id: "Krampus",
            country: "DEU",
            theme: "krampustheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-right-10",
                    w: "20vw",
                    ratio: "16 / 9",
                    src: "assets/img/Krampus.png",
                    alt: "Krampus",
                    depth: 15,
                    z: 1,
                },
                {
                    type: "video",
                    pos: "pos-top-right-10",
                    w: "470px",
                    ratio: "16 / 9",
                    src: "assets/video/krampus.mp4",
                    poster: "assets/img/krampusposter.png",
                    alt: "Krampus",
                    depth: 10,
                    z: 2,
                },
                {
                    type: "image",
                    pos: "pos-top-left-916l",
                    w: "250px",
                    ratio: "9 / 16",
                    src: "assets/img/Krampus2.png",
                    alt: "Krampus",
                    depth: 30,
                    z: 3,
                },
                {
                    type: "text",
                    pos: "pos-bottom-left-10",
                    w: "500px",
                    ratio: "16 / 9",
                    heading: "Krampus",
                    flag: "assets/flags/de.svg",
                    copy: "A folklore creature depicted as a horned, demonic being.It punishes those who have behaved badly by frightening, capturing, or carrying them away.",
                    depth: 25,
                    z: 4,
                },
            ],
        },
        {
            id: "Troll",
            country: "NOR",
            theme: "trolltheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-left-10",
                    w: "22vw",
                    ratio: "1 / 1",
                    src: "assets/img/Troll.png",
                    alt: "Troll",
                    depth: 15,
                    z: 1,
                },
                {
                    type: "video",
                    pos: "pos-top-right-10",
                    w: "500px",
                    ratio: "16 / 9",
                    src: "assets/video/troll.mp4",
                    poster: "assets/img/trollposter.jpg",
                    alt: "Troll",
                    depth: 5,
                    z: 2,
                },
                {
                    type: "image",
                    pos: "pos-bottom-right-10",
                    w: "430px",
                    ratio: "16 / 9",
                    src: "assets/img/troll2.jpg",
                    alt: "Troll",
                    depth: 20,
                    z: 1,
                },
                {
                    type: "text",
                    pos: "pos-top-left-10",
                    w: "450px",
                    ratio: "1 / 1",
                    heading: "Troll",
                    flag: "assets/flags/no.svg",
                    copy: "A folklore creature often described as large, powerful, and dwelling in mountains, caves, or forests. It fiercely guards its territory and attacks intruders.",
                    depth: 10,
                    z: 2,
                },      
            ],
        },
        {
            id: "Merman",
            country: "IRQ",
            theme: "mermantheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-right-10", 
                    w: "13vw",
                    ratio: "9 / 16",
                    src: "assets/img/Merman.jpg",
                    alt: "Merman",
                    depth: 30,
                    z: 1,
                },
                {
                    type: "image",
                    pos: "pos-bottom-left-10", 
                    w: "20vw",
                    ratio: "16 / 9",
                    src: "assets/img/merman2.jpg",
                    alt: "Merman",
                    depth: 20,
                    z: 2,
                },
                {
                    type: "video",
                    pos: "pos-top-left-10", 
                    w: "25vw",
                    ratio: "16 / 9",
                    src: "assets/video/merman.mp4",
                    poster: "assets/img/mermanposter.png",
                    alt: "Merman",
                    depth: 10,
                    z: 2,
                },
                {
                    type: "text",
                    pos: "pos-top-right-10", 
                    w: "500px",
                    ratio: "16 / 9",
                    heading: "Merman",
                    flag: "assets/flags/iq.svg",
                    copy: "A mythological aquatic creature with the upper body of a human and the tail of a fish. Legends often describe it as luring sailors or interacting with humans near the sea.",
                    depth: 25,
                    z: 4,
                },
            ],
        },
        {
            id: "El Chupacabra",
            country: "PRI",
            theme: "chupatheme",
            tiles: [
                {
                    type: "image",
                    pos: "pos-bottom-right-10",
                    w: "25vw",
                    ratio: "16 / 9",
                    src: "assets/img/chupacabra.jpg",
                    alt: "El Chupacabra",
                    depth: 15,
                    z: 1,
                },
                {
                    type: "video",
                    pos: "pos-top-right-10",
                    w: "380px",
                    ratio: "16 / 9",
                    src: "assets/video/chupacabra.mp4",
                    poster: "assets/img/chupaposter.jpg",
                    alt: "El Chupacabra",
                    depth: 10,
                    z: 2,
                },
                {
                    type: "image",
                    pos: "pos-top-left-916l",
                    w: "250px",
                    ratio: "9 / 16",
                    src: "assets/img/chupacabra2.jpg",
                    alt: "El Chupacabra",
                    depth: 30,
                    z: 3,
                },
                {
                    type: "text",
                    pos: "pos-bottom-left-10",
                    w: "500px",
                    ratio: "16 / 9",
                    heading: "El Chupacabra",
                    flag: "assets/flags/pr.svg",
                    copy: "An urban legend about a mysterious creature that attacks livestock and drains their blood. It is commonly reported near farms and rural communities.",
                    depth: 25,
                    z: 4,
                },
            ],
        },
    ];

    const fallbackSvgDataUri = (label = "Missing") => {
         const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="900" height="700">
                <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                        <stop stop-color="#e8e8e8" offset="0"/> 
                        <stop stop-color="#cfcfcf" offset="1"/>
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#g)"/> 
                <text x="50%" y="50%" dominant-baseline="middle" 
                text-anchor="middle"
                        font-family="system-ui" font-size="34"
                        fill="#666">
                    ${label}
                </text>
            </svg>
        `;
        return `data:image/svg+xml; charset=utf-8,${encodeURIComponent(svg)}`;
    };

    const el = (tag, className) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        return node;
    };

    const applyThemeData = (panelEl, theme) => {
        if (!theme) return;

        if (typeof theme === "string") {
            panelEl.dataset.theme = theme;
            return;
        }

        panelEl.dataset.theme = "custom";
        const map = {
            bg: "themeBg",
            fg: "themeFg",
            muted: "themeMuted",
            country: "themeCountry",
            cardBg: "themeCardBg",
            cardBorder: "themeCardBorder",
            countryLayerOpacity: "themeCountryLayerOpacity",
        };

        for (const [key, dataKey] of Object.entries(map)) {
            const val = theme[key];
            if (val == null) continue;
            panelEl.dataset[dataKey] = String(val);
        }
    };

    const buildTile = (tileData) => {
        const tileEl = el("div", `tile ${tileData.pos || ""}`.trim());

        if (tileData.ratio === "9 / 16") {
            tileEl.classList.add("portrait-tile");
        }

        tileEl.style.setProperty("--w", tileData.w || "30vw");
        tileEl.style.setProperty("--ratio", tileData.ratio || "16 / 9");
        tileEl.style.setProperty("--z", String(tileData.z ?? 1));

        tileEl.dataset.depth = String(tileData.depth ?? 0);

        const boxEl = el("div", "tile_box");

        switch (tileData.type) {
            case "text": {
                boxEl.classList.add("text-only_box");

                const textEl = el("div", "tile_text");
                textEl.dataset.reveal = "text";

                const h = el("h3");

                const flag = el("img", "flag");
                flag.src = tileData.flag || "";
                flag.alt = "";
                flag.loading = "lazy";

                const title = el("span");
                title.textContent = tileData.heading || "";

                h.append(flag, title);

                const p = el("p");
                p.textContent = tileData.copy || "";

                textEl.append(h, p);
                boxEl.appendChild(textEl);
                break;
            }
            case "image": {
                const img = el("img", "tile_media");
                img.loading = "lazy";
                img.decoding = "async";
                img.alt = tileData.alt || "";
                img.src = tileData.src;
                img.dataset.reveal = "media";

                img.onerror = () => {
                    img.onerror = null;
                    img.src = fallbackSvgDataUri(tileData.alt || "Image");
                };

                boxEl.appendChild(img);
                break;
            }
            case "video": {
                const video = el("video", "tile_media");
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                video.autoplay = true;
                video.preload = "auto";
                video.controls = true;
                if (tileData.poster) video.poster = tileData.poster;
                video.dataset.reveal = "video";

                const source = el("source");
                source.src = tileData.src;
                source.type = tileData.src?.endsWith(".mp4")
                    ? "video/mp4" 
                    : "video/webm";
                
                // Disable some controls
                video.controlsList = "nofullscreen nodownload noremoteplayback";

                // Prevent Picture-in-Picture
                video.disablePictureInPicture = true;

                video.addEventListener("dblclick", (e) => {
                    e.preventDefault();
                });

                video.appendChild(source);
                boxEl.appendChild(video);
                break;
            }
        }

        tileEl.appendChild(boxEl);
        return tileEl;
    };

    const mountPanels = () => {
        const listFrag = document.createDocumentFragment();

        for (const item of timelineItems) {
            const li = el("li");

            const panel = el("article", "panel");
            panel.dataset.entryId = item.id;
            applyThemeData(panel, item.theme);

            const stage = el("div", "panel_stage");
            for (const tileData of item.tiles) stage.appendChild
            (buildTile(tileData));

            panel.appendChild(stage);
            li.appendChild(panel);
            listFrag.appendChild(li);
        }

        panelsList.appendChild(listFrag);

        console.log("Mounting panels...");
    };

    const mountCountry = () => {
        const countryFrag = document.createDocumentFragment();

        for (const item of timelineItems) {
            const countryEl = el("div", "country");
            countryEl.dataset.timeline = "country";

            for (const ch of String(item.country)) {
                const span = el("span", "char");
                span.textContent = ch;
                countryEl.appendChild(span);
            }

            countryFrag.appendChild(countryEl);
        }

        countryRail.appendChild(countryFrag);
    };

    console.log("Timeline initialized");
    console.log(timelineItems);

    mountPanels();
    mountCountry();
}

/* Reveal Infos */
function initRevealAndParallax(){
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!window.gsap || !window.ScrollTrigger) {
        console.warn("GSAP/ScrollTrigger is missing for the function.");
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const showInstant = (node) => {
        node.style.opacity = "1";
        node.style.transform = "none";
    };

    const animateReveal = (node, { kind, triggerStart, duration }) => {
        if (reduceMotion) return showInstant(node);

        const tileTrigger = node.closest(".tile") || node;

        // Media
        if (kind === "media") {
            gsap.fromTo(
                node,
                { opacity: 0, scale: 1.1 },
                {
                    opacity: 1,
                    scale: 1,
                    duration,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: tileTrigger,
                        start: triggerStart,
                        once: true,
                    },
                },
            );
            return;
        }

        // Text
        gsap.to(node, {
            opacity: 1,
            y: 0,
            duration,
            ease: "power2.out",
            scrollTrigger: {
                trigger: tileTrigger,
                start: triggerStart,
                once: true,
            },
        });
    };

    const whenImgReady = (img, cb) => {
        if (img.complete && img.naturalWidth > 0) cb();
        else img.addEventListener("load", cb, { once: true });
    };

    // Images
    document.querySelectorAll('[data-reveal="media"]').forEach
    ((img) => {
        whenImgReady(img, () =>
            animateReveal(img, {
                kind: "media",
                triggerStart: "top 70%",
                duration: 0.8,
            }),
        );
    });

    // Texts
    document.querySelectorAll('[data-reveal="text"]').forEach
    ((textBlock) => {
        if (!reduceMotion) gsap.set(textBlock, { opacity: 0, y: 24 });

        animateReveal(textBlock, {
            kind: "text",
            triggerStart: "top 70%",
            duration: 0.7,
        });
    });

    // Videos
    document.querySelectorAll('[data-reveal="video"]').forEach
    ((videoEl) => {
        const tileTrigger = videoEl.closest(".tile") || videoEl;

        const initVideo = () => {
            animateReveal(videoEl, {
                kind: "media",
                triggerStart: "top 70%",
                duration: 0.8,
            });

            ScrollTrigger.create({
                trigger: tileTrigger,
                start: "top center",
                end: "bottom top",
                onEnter: () => videoEl.play().catch(() => {}),
                onEnterBack: () => videoEl.play().catch (() => {}),
                onLeave: () => videoEl.pause(),
                onLeaveBack: () => videoEl.pause(),
            });
        };

        if (videoEl.readyState >= 1) initVideo();
        else videoEl.addEventListener("loadedmetadata", initVideo, { once: true});
    });

    // Tile Parallax
    gsap.utils.toArray(".panel").forEach((panelEl) => {
        panelEl.querySelectorAll(".tile").forEach((tileEl) => {
            const parallaxDepth = Number(tileEl.dataset.depth || 18);

            gsap.fromTo(
                tileEl,
                { y: -parallaxDepth },
                {
                    y: parallaxDepth + 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: panelEl,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    },
                },
            );
        });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* Theme and Country Switch */
function initCountryThemeSwap(){
    const themePresets = {
        teketheme: {
            bg: "#F5F1E8",           // Washi paper
            fg: "#1E1E1E",
            muted: "#5C5C5C",
            country: "#B22222",      // Deep crimson
            cardBg: "#FFFFFFCC",
            cardBorder: "#BC002D33",
            countryLayerOpacity: 0.18,
        },
        penangtheme: {
            bg: "#0F3B2E",           // Tropical jungle
            fg: "#F7F4E8",
            muted: "#C9D6C6",
            country: "#FFE066",      // Soft gold
            cardBg: "#10261ECC",
            cardBorder: "#FCD11633",
            countryLayerOpacity: 0.22,
        },
        skintheme: {
            bg: "#8A6A47",           // Desert sandstone
            fg: "#F7F0E6",
            muted: "#D9C5AE",
            country: "#F5F5F5",      // Bone white
            cardBg: "#3A2A1ECC",
            cardBorder: "#FFFFFF22",
            countryLayerOpacity: 0.18,
        },
        lloronatheme: {
            bg: "#DDEBE3",           // Misty river
            fg: "#1F3D34",
            muted: "#57776D",
            country: "#0B7A4B",      // Rich emerald
            cardBg: "#FFFFFFCC",
            cardBorder: "#00684733",
            countryLayerOpacity: 0.20,
        },
        wendigotheme: {
            bg: "#EAF4F8",           // Snow
            fg: "#22313D",
            muted: "#5E707C",
            country: "#C8102E",      // Canadian red
            cardBg: "#FFFFFFCC",
            cardBorder: "#D8062133",
            countryLayerOpacity: 0.16,
        },
        krampustheme: {
            bg: "#1C1C1C",            // Alpine night
            fg: "#F3F3F3",
            muted: "#C7C7C7",
            country: "#FFCE00",       // German gold
            cardBg: "#2B2B2BCC",
            cardBorder: "#FFCE0033",
            countryLayerOpacity: 0.18,
        },
        trolltheme: {
            bg: "#264653",           // Nordic fjord
            fg: "#EDF6F9",
            muted: "#BFD7DE",
            country: "#A8DADC",      // Soft teal
            cardBg: "#17303ACC",
            cardBorder: "#A8DADC33",
            countryLayerOpacity: 0.18,
        },
        mermantheme: {
            bg: "#355C4A",           // Murky lagoon
            fg: "#F7F5F2",
            muted: "#D7D1C8",
            country: "#CDAA63",      // Golden sand
            cardBg: "#223B30CC",
            cardBorder: "#CDAA6333",
            countryLayerOpacity: 0.18,
        },
        chupatheme: {
            bg: "#442626",           // Dry farmland at dusks
            fg: "#F6EFEA",
            muted: "#D8C7BC",
            country: "#9CCBFF",      // Light Puerto Rican blue
            cardBg: "#2B1A1ACC",
            cardBorder: "#FFFFFF22",
            countryLayerOpacity: 0.18,
        },
    };

    const panelEls = gsap.utils.toArray(".panel");
    const countryEls = gsap.utils.toArray('[data-timeline="country"]');
    if (!panelEls.length || !countryEls.length) return;

    const getPanelTheme = (panelEl) => {
        const themeName = panelEl.dataset.theme;

        if (themeName && themeName != "custom"){
            return themePresets[themeName] || themePresets.light;
        }

        //Custom theme
        const customTheme = {
            bg: panelEl.dataset.themeBg,
            fg: panelEl.dataset.themeFg,
            muted: panelEl.dataset.themeMuted,
            country: panelEl.dataset.themeCountry,
            cardBg: panelEl.dataset.themeCardBg,
            cardBorder: panelEl.dataset.themeCardBorder,
            countryLayerOpacity: panelEl.dataset.themeCountryLayerOpacity ? Number(panelEl.dataset.themeCountryLayerOpacity) : undefined,
        };

        return {
            ...themePresets.light,
            ...Object.fromEntries(
            Object.entries(customTheme).filter(([, v]) => v != null),
            ),
        };
    };

    const setCssVars = (theme, { animate = true} = {}) => {
        const root = document.documentElement;

        const vars = {
            "--bg": theme.bg,
            "--fg": theme.fg,
            "--muted": theme.muted,
            "--country": theme.country,
            "--cardBg": theme.cardBg,
            "--cardBorder": theme.cardBorder,
            "--countryLayerOpacity": String(theme.countryLayerOpacity ?? 0.4),
        };

        if (!animate) {
            for (const [k, v] of Object.entries(vars)) root.style.
            setProperty(k, v);
        
            return;
        }

        gsap.to(root, {
            duration: 0.45,
            ease: "power2.out",
            ...vars,
        });

        console.log(theme);
    };

    const initCountryChars = () => {
        countryEls.forEach((countryEl, i) => {
            const chars = countryEl.querySelectorAll(".char");
            gsap.set(chars, {
                yPercent: i === 0 ? 0 : 100,
                opacity: i === 0 ? 1 : 0,
            });
        });
    };
    
    const setupCountrySwap = () => {
        panelEls.forEach((panelEl, i) => {
            if (i === 0) return;

            const prevCountryEl = countryEls[i - 1];
            const nextCountryEl = countryEls[i];

            const prevChars = prevCountryEl.querySelectorAll(".char");
            const nextChars = nextCountryEl.querySelectorAll(".char");

            gsap.timeline({
                scrollTrigger: {
                    trigger: panelEl,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                },
            })
            // KEEP YOUR EXISTING CHARACTER ANIMATION
            .to(prevChars, {
                yPercent: -100,
                opacity: 0,
                duration: 4,
                stagger: 1,
                ease: "cubic-bezier(0.23, 1, 0.32, 1)",
            }, 0)
            .to(nextChars, {
                yPercent: 0,
                autoAlpha: 1,
                duration: 4,
                stagger: 1,
                ease: "cubic-bezier(0.23, 1, 0.32, 1)",
            }, 0)

        });
    };

    const setupThemeSwitch = () => {
        panelEls.forEach((panelEl) => {
            ScrollTrigger.create({
                trigger: panelEl,
                start: "top center",
                end: "bottom center",
                onEnter: () => setCssVars(getPanelTheme(panelEl), {animate: true }),
                onEnterBack: () => setCssVars(getPanelTheme(panelEl), {animate: true }),
                onLeave: () => setCssVars(getPanelTheme(panelEl), {animate: true }),
                onLeaveBack: () => setCssVars(getPanelTheme(panelEl), { animate: true }),     
            });
        });
    };

    initCountryChars();
    setupCountrySwap();
    setupThemeSwitch();

    setCssVars(getPanelTheme(panelEls[0]), { animate: false });
    requestAnimationFrame(() => ScrollTrigger.refresh());
}

document.addEventListener("DOMContentLoaded", () => {
    initTimeline();
    initRevealAndParallax();
    initCountryThemeSwap();
});
