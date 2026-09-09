export type BotanicalVariant =
  | "fern-right"
  | "olive-branch"
  | "eucalyptus"
  | "monstera-leaf"
  | "branch-cluster"
  | "palm-leaf"
  | "wildflower"
  | "leaf-pair"

interface BotanicalDecorationProps {
  variant?: BotanicalVariant
  className?: string
}

/* ─── 1. Fern Right ─── Homepage — routing cards section ─── */
function FernRight() {
  return (
    <>
      {/* Large soft background circle */}
      <circle cx="320" cy="380" r="240" fill="#CFE0C3" opacity="0.3" />

      {/* Main fern branch — sweeps bottom-left to upper-right */}
      <g opacity="0.6">
        <path
          d="M120 700 Q260 520 400 340 Q480 240 520 140"
          stroke="#40798C"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Left leaves */}
        <path d="M200 620 Q150 570 130 490 Q175 540 210 608" fill="#40798C" opacity="0.8" />
        <path d="M200 620 Q185 575 170 520" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.5" />

        <path d="M250 550 Q195 500 180 415 Q215 465 260 540" fill="#40798C" opacity="0.8" />
        <path d="M250 550 Q235 505 220 450" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.5" />

        <path d="M305 475 Q250 425 240 340 Q270 390 315 465" fill="#40798C" opacity="0.75" />
        <path d="M305 475 Q290 430 280 380" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.5" />

        <path d="M355 405 Q305 355 295 275 Q325 325 365 395" fill="#40798C" opacity="0.7" />
        <path d="M400 340 Q360 295 350 220 Q375 270 410 330" fill="#40798C" opacity="0.65" />
        <path d="M445 275 Q410 235 405 165 Q425 210 455 265" fill="#40798C" opacity="0.6" />
        <path d="M490 210 Q465 175 460 115 Q475 155 500 200" fill="#40798C" opacity="0.55" />

        {/* Right leaves */}
        <path d="M200 620 Q250 595 300 540 Q260 585 210 628" fill="#40798C" opacity="0.8" />
        <path d="M250 550 Q310 520 355 460 Q320 510 260 558" fill="#40798C" opacity="0.8" />
        <path d="M305 475 Q365 445 405 385 Q375 435 315 483" fill="#40798C" opacity="0.75" />
        <path d="M355 405 Q410 375 445 320 Q420 365 365 413" fill="#40798C" opacity="0.7" />
        <path d="M400 340 Q450 310 480 255 Q460 300 410 348" fill="#40798C" opacity="0.65" />
        <path d="M445 275 Q490 250 510 200 Q500 240 455 283" fill="#40798C" opacity="0.6" />
      </g>

      {/* Orange solid circle — top right */}
      <circle cx="650" cy="120" r="28" fill="#FF8200" opacity="0.5" />

      {/* Orange ring — mid right */}
      <circle cx="690" cy="230" r="40" stroke="#FF8200" strokeWidth="16" fill="none" opacity="0.3" />

      {/* Teal dot cluster — bottom right */}
      <g opacity="0.35" fill="#40798C">
        <circle cx="640" cy="620" r="6" />
        <circle cx="658" cy="612" r="6" />
        <circle cx="650" cy="635" r="6" />
        <circle cx="670" cy="628" r="6" />
        <circle cx="635" cy="645" r="6" />
        <circle cx="665" cy="648" r="6" />
      </g>
    </>
  )
}

/* ─── 2. Olive Branch ─── About page — narrative section ─── */
function OliveBranch() {
  return (
    <>
      {/* Large background circle — offset left */}
      <circle cx="280" cy="400" r="250" fill="#CFE0C3" opacity="0.28" />

      {/* Main olive branch — gentle curve */}
      <g opacity="0.6">
        <path
          d="M600 680 Q480 500 360 380 Q280 320 200 260 Q160 230 130 180"
          stroke="#40798C"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Rounded olive leaves along branch */}
        <ellipse cx="530" cy="610" rx="30" ry="14" transform="rotate(-50 530 610)" fill="#40798C" opacity="0.7" />
        <path d="M530 610 Q515 598 505 585" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.5" />

        <ellipse cx="460" cy="530" rx="28" ry="13" transform="rotate(-45 460 530)" fill="#40798C" opacity="0.7" />
        <path d="M460 530 Q448 518 440 505" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.5" />

        <ellipse cx="390" cy="450" rx="26" ry="12" transform="rotate(-38 390 450)" fill="#40798C" opacity="0.7" />

        <ellipse cx="330" cy="385" rx="24" ry="11" transform="rotate(-30 330 385)" fill="#40798C" opacity="0.7" />

        <ellipse cx="270" cy="330" rx="22" ry="10" transform="rotate(-25 270 330)" fill="#40798C" opacity="0.65" />

        <ellipse cx="220" cy="280" rx="20" ry="10" transform="rotate(-20 220 280)" fill="#40798C" opacity="0.6" />

        <ellipse cx="175" cy="240" rx="18" ry="9" transform="rotate(-15 175 240)" fill="#40798C" opacity="0.55" />

        {/* Opposite-side leaves */}
        <ellipse cx="555" cy="640" rx="26" ry="12" transform="rotate(40 555 640)" fill="#40798C" opacity="0.7" />
        <ellipse cx="490" cy="560" rx="24" ry="11" transform="rotate(45 490 560)" fill="#40798C" opacity="0.7" />
        <ellipse cx="420" cy="480" rx="22" ry="11" transform="rotate(50 420 480)" fill="#40798C" opacity="0.65" />
        <ellipse cx="355" cy="415" rx="20" ry="10" transform="rotate(45 355 415)" fill="#40798C" opacity="0.6" />
        <ellipse cx="295" cy="355" rx="18" ry="9" transform="rotate(40 295 355)" fill="#40798C" opacity="0.55" />
      </g>

      {/* Orange solid circle — bottom left */}
      <circle cx="120" cy="650" r="30" fill="#FF8200" opacity="0.45" />

      {/* Green dot cluster — upper right */}
      <g opacity="0.35" fill="#9EC1A3">
        <circle cx="650" cy="140" r="5" />
        <circle cx="665" cy="132" r="5" />
        <circle cx="660" cy="150" r="5" />
        <circle cx="675" cy="145" r="5" />
        <circle cx="645" cy="158" r="5" />
        <circle cx="678" cy="158" r="5" />
      </g>

      {/* Small accent circle */}
      <circle cx="680" cy="380" r="20" fill="#9EC1A3" opacity="0.3" />
    </>
  )
}

/* ─── 3. Eucalyptus ─── About page — approach section ─── */
function Eucalyptus() {
  return (
    <>
      {/* Background circle */}
      <circle cx="400" cy="350" r="220" fill="#CFE0C3" opacity="0.25" />

      {/* Eucalyptus stems with round leaves */}
      <g opacity="0.6">
        {/* Stem 1 */}
        <path
          d="M300 720 Q310 550 340 380 Q355 280 350 180"
          stroke="#40798C"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="325" cy="620" r="18" fill="#40798C" opacity="0.65" />
        <circle cx="348" cy="540" r="16" fill="#40798C" opacity="0.6" />
        <circle cx="340" cy="460" r="15" fill="#40798C" opacity="0.6" />
        <circle cx="350" cy="380" r="14" fill="#40798C" opacity="0.55" />
        <circle cx="355" cy="310" r="13" fill="#40798C" opacity="0.5" />
        <circle cx="352" cy="240" r="12" fill="#40798C" opacity="0.45" />

        {/* Stem 2 */}
        <path
          d="M420 700 Q440 540 470 380 Q490 280 500 200"
          stroke="#40798C"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="435" cy="600" r="17" fill="#40798C" opacity="0.6" />
        <circle cx="455" cy="520" r="15" fill="#40798C" opacity="0.55" />
        <circle cx="468" cy="440" r="14" fill="#40798C" opacity="0.55" />
        <circle cx="480" cy="360" r="13" fill="#40798C" opacity="0.5" />
        <circle cx="490" cy="285" r="12" fill="#40798C" opacity="0.45" />

        {/* Stem 3 — shorter */}
        <path
          d="M540 680 Q550 560 560 440 Q565 370 560 310"
          stroke="#40798C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="545" cy="590" r="15" fill="#40798C" opacity="0.55" />
        <circle cx="555" cy="510" r="14" fill="#40798C" opacity="0.5" />
        <circle cx="560" cy="435" r="13" fill="#40798C" opacity="0.5" />
        <circle cx="562" cy="365" r="12" fill="#40798C" opacity="0.45" />
      </g>

      {/* Orange ring — top area */}
      <circle cx="200" cy="160" r="38" stroke="#FF8200" strokeWidth="14" fill="none" opacity="0.3" />

      {/* Small teal solid circle */}
      <circle cx="650" cy="550" r="22" fill="#40798C" opacity="0.25" />

      {/* Green dot cluster — bottom */}
      <g opacity="0.3" fill="#9EC1A3">
        <circle cx="150" cy="640" r="5" />
        <circle cx="165" cy="635" r="5" />
        <circle cx="158" cy="652" r="5" />
        <circle cx="173" cy="648" r="5" />
        <circle cx="145" cy="660" r="5" />
        <circle cx="170" cy="662" r="5" />
      </g>
    </>
  )
}

/* ─── 4. Monstera Leaf ─── Individual services page ─── */
function MonsteraLeaf() {
  return (
    <>
      {/* Large background circle */}
      <circle cx="350" cy="380" r="250" fill="#CFE0C3" opacity="0.28" />

      {/* Monstera leaf — large simplified with splits */}
      <g opacity="0.55">
        {/* Stem */}
        <path
          d="M350 750 Q340 600 350 500"
          stroke="#40798C"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Main leaf shape */}
        <path
          d="M350 500 Q280 440 220 340 Q190 280 200 210 Q220 150 290 120
             Q340 105 380 110 Q440 120 490 160 Q540 210 560 280
             Q570 340 540 410 Q500 470 420 500 Q385 510 350 500Z"
          fill="#40798C"
          opacity="0.6"
        />
        {/* Characteristic splits/holes */}
        <path
          d="M310 380 Q290 340 280 290 Q310 310 340 360"
          fill="#CFE0C3"
          opacity="0.8"
        />
        <path
          d="M400 350 Q420 310 430 260 Q410 300 380 345"
          fill="#CFE0C3"
          opacity="0.8"
        />
        <path
          d="M320 260 Q300 220 310 180 Q330 210 340 250"
          fill="#CFE0C3"
          opacity="0.8"
        />
        {/* Central vein */}
        <path
          d="M350 490 Q340 400 330 310 Q325 250 340 170"
          stroke="#70A9A1"
          strokeWidth="1.8"
          fill="none"
          opacity="0.5"
        />
        {/* Side veins */}
        <path d="M340 420 Q300 380 260 340" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M345 360 Q310 320 280 270" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M340 300 Q320 260 310 210" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M350 420 Q400 380 440 350" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M345 350 Q390 310 440 280" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M340 280 Q370 240 410 200" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
      </g>

      {/* Orange dot cluster — upper right corner */}
      <g opacity="0.4" fill="#FF8200">
        <circle cx="650" cy="110" r="5" />
        <circle cx="665" cy="105" r="5" />
        <circle cx="658" cy="122" r="5" />
        <circle cx="675" cy="118" r="5" />
        <circle cx="645" cy="130" r="5" />
      </g>

      {/* Green solid circle */}
      <circle cx="130" cy="580" r="25" fill="#9EC1A3" opacity="0.35" />
    </>
  )
}

/* ─── 5. Branch Cluster ─── Organizations — pillars section ─── */
function BranchCluster() {
  return (
    <>
      {/* Two overlapping background circles */}
      <circle cx="300" cy="370" r="210" fill="#CFE0C3" opacity="0.25" />
      <circle cx="420" cy="320" r="180" fill="#CFE0C3" opacity="0.2" />

      {/* Cluster of thin branches with small leaves */}
      <g opacity="0.55">
        {/* Branch 1 — main */}
        <path
          d="M250 700 Q280 550 350 400 Q400 310 430 200"
          stroke="#40798C"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M300 580 Q270 550 255 505 Q285 530 310 570" fill="#40798C" opacity="0.7" />
        <path d="M340 480 Q310 445 300 400 Q325 425 350 470" fill="#40798C" opacity="0.65" />
        <path d="M380 380 Q355 345 350 300 Q370 330 390 370" fill="#40798C" opacity="0.6" />
        <path d="M410 290 Q390 260 388 220 Q402 248 420 282" fill="#40798C" opacity="0.55" />
        {/* Right leaves */}
        <path d="M310 570 Q350 555 380 515 Q355 545 320 578" fill="#40798C" opacity="0.7" />
        <path d="M350 470 Q390 450 415 410 Q395 442 360 478" fill="#40798C" opacity="0.65" />
        <path d="M385 375 Q420 355 440 320 Q425 350 393 382" fill="#40798C" opacity="0.6" />

        {/* Branch 2 — right */}
        <path
          d="M380 720 Q420 580 480 440 Q520 360 550 270"
          stroke="#40798C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M430 580 Q405 550 400 510 Q420 535 440 572" fill="#40798C" opacity="0.6" />
        <path d="M475 475 Q455 445 450 405 Q465 430 482 468" fill="#40798C" opacity="0.55" />
        <path d="M510 390 Q495 360 492 325 Q505 350 518 382" fill="#40798C" opacity="0.5" />

        {/* Branch 3 — left shorter */}
        <path
          d="M180 660 Q210 540 260 420 Q290 350 300 280"
          stroke="#40798C"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M215 550 Q195 520 192 480 Q210 505 225 542" fill="#40798C" opacity="0.6" />
        <path d="M250 450 Q235 420 232 385 Q245 408 258 443" fill="#40798C" opacity="0.55" />
      </g>

      {/* Orange ring */}
      <circle cx="640" cy="180" r="35" stroke="#FF8200" strokeWidth="13" fill="none" opacity="0.3" />

      {/* Teal dot cluster */}
      <g opacity="0.3" fill="#40798C">
        <circle cx="120" cy="200" r="5" />
        <circle cx="135" cy="195" r="5" />
        <circle cx="128" cy="212" r="5" />
        <circle cx="142" cy="208" r="5" />
        <circle cx="115" cy="220" r="5" />
        <circle cx="140" cy="222" r="5" />
      </g>
    </>
  )
}

/* ─── 6. Palm Leaf ─── Organizations — services section ─── */
function PalmLeaf() {
  return (
    <>
      {/* Background shape */}
      <circle cx="380" cy="400" r="230" fill="#CFE0C3" opacity="0.25" />

      {/* Fan-shaped palm leaf */}
      <g opacity="0.55">
        {/* Stem */}
        <path
          d="M380 750 Q370 650 370 550"
          stroke="#40798C"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Fan blades radiating from top of stem */}
        <path d="M370 550 Q300 440 220 320 Q270 400 350 520" fill="#40798C" opacity="0.7" />
        <path d="M370 550 Q340 420 280 260 Q320 380 365 530" fill="#40798C" opacity="0.65" />
        <path d="M370 550 Q360 400 350 220 Q365 380 372 540" fill="#40798C" opacity="0.6" />
        <path d="M370 550 Q390 400 420 220 Q400 380 375 540" fill="#40798C" opacity="0.6" />
        <path d="M370 550 Q420 420 490 260 Q440 380 378 530" fill="#40798C" opacity="0.65" />
        <path d="M370 550 Q440 440 540 320 Q460 400 385 520" fill="#40798C" opacity="0.7" />

        {/* Vein lines */}
        <path d="M370 545 Q310 440 240 320" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M370 545 Q350 410 330 250" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M370 545 Q368 400 365 230" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M370 545 Q395 410 425 250" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
        <path d="M370 545 Q430 440 510 320" stroke="#70A9A1" strokeWidth="1.2" fill="none" opacity="0.4" />
      </g>

      {/* Orange solid circle — small */}
      <circle cx="620" cy="600" r="24" fill="#FF8200" opacity="0.45" />

      {/* Green solid circle — medium */}
      <circle cx="140" cy="450" r="30" fill="#9EC1A3" opacity="0.35" />

      {/* Tea green dot cluster */}
      <g opacity="0.3" fill="#CFE0C3">
        <circle cx="620" cy="160" r="5" />
        <circle cx="635" cy="155" r="5" />
        <circle cx="628" cy="172" r="5" />
        <circle cx="643" cy="168" r="5" />
        <circle cx="615" cy="180" r="5" />
        <circle cx="640" cy="182" r="5" />
      </g>
    </>
  )
}

/* ─── 7. Wildflower ─── Workshops page ─── */
function Wildflower() {
  return (
    <>
      {/* Large background shape */}
      <circle cx="350" cy="420" r="240" fill="#CFE0C3" opacity="0.25" />

      {/* Abstract wildflower stems with circle heads */}
      <g opacity="0.6">
        {/* Stem 1 — tallest */}
        <path
          d="M280 720 Q275 550 300 380 Q310 280 290 180"
          stroke="#40798C"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="290" cy="175" r="20" fill="#40798C" opacity="0.6" />
        <circle cx="290" cy="175" r="12" fill="#9EC1A3" opacity="0.5" />
        {/* Small leaves on stem */}
        <path d="M288 450 Q260 430 250 395 Q272 415 295 442" fill="#40798C" opacity="0.5" />
        <path d="M295 380 Q320 360 330 325 Q315 352 290 375" fill="#40798C" opacity="0.5" />

        {/* Stem 2 */}
        <path
          d="M380 700 Q385 560 395 430 Q405 330 400 240"
          stroke="#40798C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="400" cy="235" r="18" fill="#40798C" opacity="0.55" />
        <circle cx="400" cy="235" r="10" fill="#9EC1A3" opacity="0.5" />

        {/* Stem 3 */}
        <path
          d="M470 730 Q480 590 500 450 Q510 360 510 290"
          stroke="#40798C"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="510" cy="285" r="16" fill="#40798C" opacity="0.5" />
        <circle cx="510" cy="285" r="9" fill="#9EC1A3" opacity="0.45" />

        {/* Stem 4 — shortest */}
        <path
          d="M560 710 Q565 600 570 490 Q575 420 572 360"
          stroke="#40798C"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="572" cy="355" r="14" fill="#40798C" opacity="0.45" />
        <circle cx="572" cy="355" r="8" fill="#9EC1A3" opacity="0.4" />
      </g>

      {/* Orange ring */}
      <circle cx="160" cy="220" r="35" stroke="#FF8200" strokeWidth="13" fill="none" opacity="0.3" />

      {/* Teal dot cluster */}
      <g opacity="0.3" fill="#40798C">
        <circle cx="640" cy="520" r="5" />
        <circle cx="655" cy="515" r="5" />
        <circle cx="648" cy="532" r="5" />
        <circle cx="663" cy="528" r="5" />
        <circle cx="635" cy="540" r="5" />
        <circle cx="660" cy="542" r="5" />
      </g>

      {/* Small green accent */}
      <circle cx="140" cy="600" r="20" fill="#9EC1A3" opacity="0.3" />
    </>
  )
}

/* ─── 8. Leaf Pair ─── FAQ & Contact pages ─── */
function LeafPair() {
  return (
    <>
      {/* Background circle */}
      <circle cx="380" cy="380" r="230" fill="#CFE0C3" opacity="0.28" />

      {/* Two overlapping leaves */}
      <g opacity="0.55">
        {/* Leaf 1 — larger, lower */}
        <path
          d="M250 600 Q220 480 250 360 Q280 260 350 200
             Q380 240 390 320 Q400 420 350 520 Q310 580 250 600Z"
          fill="#40798C"
          opacity="0.65"
        />
        <path
          d="M250 600 Q270 470 310 350 Q340 260 350 200"
          stroke="#70A9A1"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        {/* Side veins */}
        <path d="M280 500 Q255 470 240 430" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M295 440 Q270 410 260 370" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M310 380 Q290 350 285 310" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M300 490 Q330 465 355 445" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M315 420 Q340 395 365 375" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Leaf 2 — smaller, upper-right, rotated */}
        <path
          d="M420 480 Q400 380 420 290 Q440 210 500 165
             Q520 200 525 270 Q530 350 490 430 Q460 470 420 480Z"
          fill="#40798C"
          opacity="0.55"
        />
        <path
          d="M420 480 Q430 370 460 280 Q480 220 500 165"
          stroke="#70A9A1"
          strokeWidth="1.3"
          fill="none"
          opacity="0.45"
        />
        <path d="M435 410 Q415 385 410 350" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.35" />
        <path d="M445 350 Q430 325 425 290" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.35" />
        <path d="M450 400 Q475 380 495 365" stroke="#70A9A1" strokeWidth="1" fill="none" opacity="0.35" />
      </g>

      {/* Orange solid circle */}
      <circle cx="620" cy="580" r="26" fill="#FF8200" opacity="0.45" />

      {/* Green dot cluster */}
      <g opacity="0.3" fill="#9EC1A3">
        <circle cx="140" cy="180" r="5" />
        <circle cx="155" cy="175" r="5" />
        <circle cx="148" cy="192" r="5" />
        <circle cx="163" cy="188" r="5" />
        <circle cx="135" cy="200" r="5" />
        <circle cx="160" cy="202" r="5" />
      </g>

      {/* Small accent circle */}
      <circle cx="660" cy="200" r="22" fill="#9EC1A3" opacity="0.3" />
    </>
  )
}

const variantMap: Record<BotanicalVariant, () => React.JSX.Element> = {
  "fern-right": FernRight,
  "olive-branch": OliveBranch,
  "eucalyptus": Eucalyptus,
  "monstera-leaf": MonsteraLeaf,
  "branch-cluster": BranchCluster,
  "palm-leaf": PalmLeaf,
  "wildflower": Wildflower,
  "leaf-pair": LeafPair,
}

export function BotanicalDecoration({
  variant = "fern-right",
  className = "",
}: BotanicalDecorationProps) {
  const Variant = variantMap[variant]

  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <Variant />
    </svg>
  )
}
