import { cn } from "@/lib/utils"

interface BotanicalSVGProps {
  variant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  className?: string
}

export function BotanicalSVG({ variant, className }: BotanicalSVGProps) {
  const variants: Record<number, React.ReactNode> = {
    1: <LeafBranch />,
    2: <OliveBranch />,
    3: <EucalyptusSprig />,
    4: <TealVine />,
    5: <MinimalistBranch />,
    6: <SpreadingVine />,
    7: <FernFronds />,
    8: <WillowDrape />,
    9: <ScatteredLeaves />,
    10: <TropicalLeaf />,
    11: <BerryBranch />,
    12: <SpiralVine />,
  }

  return (
    <div className={cn("pointer-events-none select-none", className)} aria-hidden="true">
      {variants[variant]}
    </div>
  )
}

/* ─── Variant 1: Large pointed leaves on central stem ─── */
/* Inspired by image 1 — warm leaf branch with circle + organic blobs */
function LeafBranch() {
  return (
    <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Circle top-left */}
      <circle cx="110" cy="80" r="56" fill="#D4882B" opacity="0.3" />
      {/* Organic blob top-right */}
      <path
        d="M290 35C325 42 360 95 348 165C336 228 280 220 268 162C256 108 258 28 290 35Z"
        fill="#CFE0C3" opacity="0.5"
      />
      {/* D-shape bottom-left */}
      <path
        d="M70 345C70 292 128 268 160 305C188 338 162 408 108 410C72 412 70 382 70 345Z"
        fill="#D4882B" opacity="0.2"
      />

      {/* Main stem */}
      <path d="M200 468C198 395 196 295 200 68" stroke="#70A9A1" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right leaves (bottom to top) */}
      <path d="M200 395C218 372 258 338 295 315C272 350 232 388 200 405Z" fill="#70A9A1" opacity="0.82" />
      <path d="M200 305C222 278 268 242 308 218C282 256 238 298 200 315Z" fill="#70A9A1" opacity="0.72" />
      <path d="M200 215C218 192 252 160 282 140C262 172 228 210 200 225Z" fill="#70A9A1" opacity="0.62" />

      {/* Left leaves (bottom to top) */}
      <path d="M200 440C180 418 142 386 108 368C132 396 170 432 200 448Z" fill="#70A9A1" opacity="0.85" />
      <path d="M200 350C178 326 138 292 102 272C128 302 168 342 200 360Z" fill="#70A9A1" opacity="0.75" />
      <path d="M200 260C182 238 148 208 118 192C140 220 172 254 200 270Z" fill="#70A9A1" opacity="0.65" />
      <path d="M200 170C188 152 165 130 148 118C160 138 182 162 200 178Z" fill="#70A9A1" opacity="0.55" />

      {/* Leaf veins */}
      <g stroke="#9EC1A3" strokeWidth="0.8" opacity="0.45">
        <path d="M200 400L280 330" />
        <path d="M200 310L292 235" />
        <path d="M200 220L268 155" />
        <path d="M200 445L122 382" />
        <path d="M200 355L118 288" />
        <path d="M200 265L132 208" />
      </g>
    </svg>
  )
}

/* ─── Variant 2: Round olive leaves with golden triangle + cream blob ─── */
/* Inspired by image 2 — olive branch with geometric blobs */
function OliveBranch() {
  return (
    <svg viewBox="0 0 340 500" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Golden triangle blob top */}
      <path
        d="M185 40C230 38 295 85 282 160C270 225 210 210 198 155C186 100 152 42 185 40Z"
        fill="#D4882B" opacity="0.38"
      />
      {/* Cream blob bottom */}
      <path
        d="M85 310C50 328 38 395 82 438C126 478 225 465 245 418C265 372 220 308 162 298C128 292 112 296 85 310Z"
        fill="#CFE0C3" opacity="0.42"
      />

      {/* Main stem */}
      <path d="M170 468C168 395 165 295 170 82" stroke="#4A6B6A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right leaves */}
      <ellipse cx="218" cy="145" rx="24" ry="17" transform="rotate(-32 218 145)" fill="#4A6B6A" opacity="0.82" />
      <ellipse cx="225" cy="248" rx="26" ry="18" transform="rotate(-28 225 248)" fill="#4A6B6A" opacity="0.85" />
      <ellipse cx="222" cy="348" rx="25" ry="17" transform="rotate(-22 222 348)" fill="#4A6B6A" opacity="0.88" />
      <ellipse cx="215" cy="425" rx="23" ry="16" transform="rotate(-18 215 425)" fill="#4A6B6A" opacity="0.9" />

      {/* Left leaves */}
      <ellipse cx="122" cy="195" rx="24" ry="16" transform="rotate(32 122 195)" fill="#4A6B6A" opacity="0.82" />
      <ellipse cx="115" cy="298" rx="26" ry="17" transform="rotate(26 115 298)" fill="#4A6B6A" opacity="0.85" />
      <ellipse cx="118" cy="398" rx="24" ry="16" transform="rotate(22 118 398)" fill="#4A6B6A" opacity="0.88" />

      {/* Small top leaves */}
      <ellipse cx="155" cy="112" rx="15" ry="11" transform="rotate(18 155 112)" fill="#4A6B6A" opacity="0.72" />
      <ellipse cx="188" cy="98" rx="13" ry="10" transform="rotate(-12 188 98)" fill="#4A6B6A" opacity="0.65" />

      {/* Branch lines to leaves */}
      <g stroke="#4A6B6A" strokeWidth="1" opacity="0.4">
        <path d="M170 145L198 140" />
        <path d="M170 248L202 244" />
        <path d="M170 348L200 344" />
        <path d="M170 195L145 192" />
        <path d="M170 298L140 295" />
      </g>
    </svg>
  )
}

/* ─── Variant 3: Eucalyptus sprig with thin branching stems + golden crescent ─── */
/* Inspired by image 3 — eucalyptus with half-moon shape */
function EucalyptusSprig() {
  return (
    <svg viewBox="0 0 380 500" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Golden crescent behind */}
      <path
        d="M148 85C218 62 308 115 318 215C328 315 262 378 185 358C258 335 298 258 290 182C282 122 225 85 148 85Z"
        fill="#D4882B" opacity="0.32"
      />

      {/* Main stem */}
      <path d="M188 478C184 418 178 338 182 105" stroke="#4A6B6A" strokeWidth="2" strokeLinecap="round" />

      {/* Branch stems */}
      <g stroke="#4A6B6A" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M182 365C202 342 228 315 248 295" />
        <path d="M182 305C158 278 132 252 112 232" />
        <path d="M182 248C205 222 232 195 252 175" />
        <path d="M182 195C162 168 138 142 122 122" />
        <path d="M182 155C198 135 215 115 228 98" />
        <path d="M182 420C162 402 142 382 128 368" />
      </g>

      {/* Round leaves at branch ends */}
      <circle cx="252" cy="290" r="19" fill="#4A6B6A" opacity="0.78" />
      <circle cx="108" cy="228" r="17" fill="#4A6B6A" opacity="0.74" />
      <circle cx="256" cy="170" r="18" fill="#4A6B6A" opacity="0.7" />
      <circle cx="118" cy="118" r="16" fill="#4A6B6A" opacity="0.74" />
      <circle cx="232" cy="94" r="15" fill="#4A6B6A" opacity="0.65" />
      <circle cx="124" cy="364" r="17" fill="#4A6B6A" opacity="0.78" />

      {/* Smaller mid-branch leaves */}
      <circle cx="220" cy="325" r="12" fill="#4A6B6A" opacity="0.55" />
      <circle cx="142" cy="262" r="11" fill="#4A6B6A" opacity="0.55" />
      <circle cx="222" cy="205" r="12" fill="#4A6B6A" opacity="0.5" />
      <circle cx="148" cy="158" r="11" fill="#4A6B6A" opacity="0.55" />
      <circle cx="152" cy="395" r="11" fill="#4A6B6A" opacity="0.55" />

      {/* Top bud */}
      <ellipse cx="183" cy="100" rx="7" ry="10" fill="#4A6B6A" opacity="0.6" />
    </svg>
  )
}

/* ─── Variant 4: Delicate vine with small paired leaves ─── */
/* Inspired by image 4 — teal vine with golden oval + cream blob */
function TealVine() {
  return (
    <svg viewBox="0 0 380 520" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Small golden oval top-left */}
      <ellipse cx="88" cy="102" rx="40" ry="52" transform="rotate(-18 88 102)" fill="#D4882B" opacity="0.38" />
      {/* Large cream organic blob */}
      <path
        d="M205 185C258 165 338 202 348 298C358 395 302 455 235 445C168 435 148 378 155 302C160 245 172 200 205 185Z"
        fill="#CFE0C3" opacity="0.38"
      />

      {/* Main vine stem */}
      <path d="M188 498C184 428 176 348 182 248C186 182 200 125 218 65" stroke="#40798C" strokeWidth="2" strokeLinecap="round" />

      {/* Paired leaves — bottom to top */}
      {/* Pair 1 */}
      <path d="M186 442C174 425 152 408 140 398C156 405 178 425 189 442Z" fill="#40798C" opacity="0.85" />
      <path d="M188 438C202 422 224 408 236 398C220 408 198 428 189 442Z" fill="#40798C" opacity="0.8" />
      {/* Pair 2 */}
      <path d="M184 378C170 358 146 338 132 328C150 336 175 360 187 378Z" fill="#40798C" opacity="0.8" />
      <path d="M186 374C202 355 228 338 244 328C225 340 200 362 187 378Z" fill="#40798C" opacity="0.75" />
      {/* Pair 3 */}
      <path d="M182 312C170 292 148 272 135 262C152 270 174 294 185 312Z" fill="#40798C" opacity="0.75" />
      <path d="M184 308C200 290 226 272 242 262C224 274 200 296 185 312Z" fill="#40798C" opacity="0.7" />
      {/* Pair 4 */}
      <path d="M183 250C174 234 156 216 145 206C158 214 176 236 185 250Z" fill="#40798C" opacity="0.7" />
      <path d="M185 246C196 230 216 215 228 206C215 216 196 238 185 250Z" fill="#40798C" opacity="0.65" />
      {/* Pair 5 */}
      <path d="M192 190C184 175 172 158 162 148C174 155 186 175 194 190Z" fill="#40798C" opacity="0.65" />
      <path d="M194 186C204 172 218 158 228 150C218 160 204 178 194 190Z" fill="#40798C" opacity="0.6" />
      {/* Pair 6 */}
      <path d="M202 132C196 120 188 105 182 96C190 102 198 120 204 132Z" fill="#40798C" opacity="0.58" />
      <path d="M204 128C212 115 222 104 230 96C222 104 212 120 204 132Z" fill="#40798C" opacity="0.52" />

      {/* Top bud */}
      <path d="M218 68C216 58 218 48 220 42C222 48 220 58 218 68Z" fill="#40798C" opacity="0.5" />
    </svg>
  )
}

/* ─── Variant 5: Dark minimalist branch with overlapping pastel circles ─── */
/* Inspired by image 5 — dark branch + sage/lavender circles */
function MinimalistBranch() {
  return (
    <svg viewBox="0 0 340 500" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Large sage circle top */}
      <circle cx="182" cy="178" r="102" fill="#CFE0C3" opacity="0.55" />
      {/* Overlapping teal circle bottom */}
      <circle cx="158" cy="318" r="92" fill="#70A9A1" opacity="0.22" />

      {/* Main stem */}
      <path d="M170 478C168 398 166 298 170 62" stroke="#1F363D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right leaves (bottom to top) */}
      <path d="M170 425C180 410 198 395 208 388C198 402 180 420 170 432Z" fill="#1F363D" />
      <path d="M170 350C182 334 202 316 214 308C202 324 182 345 170 358Z" fill="#1F363D" />
      <path d="M170 270C182 254 200 238 212 230C200 245 182 266 170 278Z" fill="#1F363D" />
      <path d="M170 192C180 178 196 162 206 155C196 168 180 188 170 200Z" fill="#1F363D" />
      <path d="M170 118C178 106 192 92 200 86C192 96 178 114 170 125Z" fill="#1F363D" />

      {/* Left leaves (bottom to top) */}
      <path d="M170 388C160 372 145 355 136 348C145 360 160 382 170 395Z" fill="#1F363D" />
      <path d="M170 310C158 294 140 278 130 270C140 282 158 304 170 318Z" fill="#1F363D" />
      <path d="M170 230C160 216 145 200 136 192C145 204 160 224 170 238Z" fill="#1F363D" />
      <path d="M170 155C162 142 150 128 142 122C150 132 162 150 170 162Z" fill="#1F363D" />

      {/* Top bud */}
      <path d="M170 74C168 62 170 50 172 42C174 50 172 62 170 74Z" fill="#1F363D" />
    </svg>
  )
}

/* ─── Variant 6: Spreading vine with round two-tone leaves ─── */
/* Inspired by image 6 — multiple curving branches radiating outward */
function SpreadingVine() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Main branches radiating from center */}
      <g stroke="#1F363D" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M200 200C222 172 258 135 295 98" />
        <path d="M200 200C172 168 138 130 108 98" />
        <path d="M200 200C238 195 282 200 328 212" />
        <path d="M200 200C228 228 262 268 288 308" />
        <path d="M200 200C168 230 132 265 100 298" />
      </g>

      {/* Sub-branches */}
      <g stroke="#1F363D" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M252 162C268 148 282 138 292 128" />
        <path d="M148 148C132 132 118 118 108 108" />
        <path d="M148 148C135 148 118 155 105 158" />
        <path d="M275 205C292 198 308 195 318 192" />
        <path d="M255 258C268 268 278 282 288 292" />
        <path d="M138 258C125 268 112 278 102 288" />
        <path d="M138 258C128 252 115 242 105 238" />
      </g>

      {/* Leaves — two-tone teardrop shapes */}
      {/* Branch 1 end (upper right) */}
      <ellipse cx="300" cy="92" rx="22" ry="27" transform="rotate(-42 300 92)" fill="#40798C" />
      <ellipse cx="295" cy="122" rx="18" ry="23" transform="rotate(-22 295 122)" fill="#70A9A1" />

      {/* Branch 2 end (upper left) */}
      <ellipse cx="102" cy="92" rx="24" ry="28" transform="rotate(38 102 92)" fill="#70A9A1" />
      <ellipse cx="108" cy="108" rx="18" ry="22" transform="rotate(18 108 108)" fill="#40798C" opacity="0.85" />

      {/* Sub-branch left */}
      <ellipse cx="100" cy="155" rx="16" ry="20" transform="rotate(15 100 155)" fill="#70A9A1" opacity="0.8" />

      {/* Branch 3 end (right) */}
      <ellipse cx="335" cy="210" rx="22" ry="26" transform="rotate(-8 335 210)" fill="#70A9A1" />
      <ellipse cx="322" cy="190" rx="17" ry="21" transform="rotate(-5 322 190)" fill="#40798C" opacity="0.8" />

      {/* Branch 4 end (lower right) */}
      <ellipse cx="292" cy="312" rx="21" ry="26" transform="rotate(42 292 312)" fill="#40798C" />
      <ellipse cx="290" cy="295" rx="17" ry="22" transform="rotate(28 290 295)" fill="#70A9A1" opacity="0.85" />

      {/* Branch 5 end (lower left) */}
      <ellipse cx="95" cy="302" rx="23" ry="28" transform="rotate(-38 95 302)" fill="#70A9A1" />
      <ellipse cx="98" cy="290" rx="18" ry="22" transform="rotate(-18 98 290)" fill="#40798C" opacity="0.85" />

      {/* Sub-branch lower left */}
      <ellipse cx="100" cy="235" rx="16" ry="20" transform="rotate(-12 100 235)" fill="#40798C" opacity="0.75" />

      {/* Mid-branch accent leaves */}
      <ellipse cx="248" cy="158" rx="16" ry="20" transform="rotate(-32 248 158)" fill="#70A9A1" opacity="0.72" />
      <ellipse cx="152" cy="152" rx="16" ry="20" transform="rotate(28 152 152)" fill="#40798C" opacity="0.72" />
      <ellipse cx="258" cy="252" rx="15" ry="19" transform="rotate(32 258 252)" fill="#70A9A1" opacity="0.72" />
      <ellipse cx="142" cy="255" rx="16" ry="20" transform="rotate(-22 142 255)" fill="#40798C" opacity="0.72" />

      {/* Sub-branch upper right */}
      <ellipse cx="295" cy="125" rx="14" ry="18" transform="rotate(-35 295 125)" fill="#40798C" opacity="0.7" />
    </svg>
  )
}

/* ─── Variant 7: Fern fronds with golden arch ─── */
function FernFronds() {
  return (
    <svg viewBox="0 0 380 520" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Golden arch */}
      <path
        d="M60 420C60 220 160 80 280 60"
        stroke="#D4882B" strokeWidth="40" strokeLinecap="round" opacity="0.2" fill="none"
      />

      {/* Main fern stem */}
      <path d="M190 500C186 420 182 320 190 80" stroke="#4A6B6A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right frond leaflets (bottom to top) */}
      <g fill="#70A9A1">
        <path d="M190 430C200 420 218 412 230 408C222 416 204 428 190 435Z" opacity="0.9" />
        <path d="M230 408C238 398 252 392 262 390C256 396 242 406 230 412Z" opacity="0.75" />
        <path d="M190 370C202 358 222 348 236 342C226 352 206 366 190 376Z" opacity="0.85" />
        <path d="M236 342C246 332 262 326 274 324C266 330 250 340 236 348Z" opacity="0.7" />
        <path d="M190 310C204 296 226 284 242 278C230 290 208 306 190 316Z" opacity="0.8" />
        <path d="M242 278C252 268 268 260 280 258C272 264 258 274 242 284Z" opacity="0.65" />
        <path d="M190 250C202 238 222 228 236 222C226 232 206 246 190 256Z" opacity="0.75" />
        <path d="M190 190C200 180 216 172 228 168C220 176 204 188 190 196Z" opacity="0.7" />
        <path d="M190 135C198 126 212 118 222 114C216 122 202 132 190 140Z" opacity="0.6" />
      </g>

      {/* Left frond leaflets */}
      <g fill="#40798C">
        <path d="M190 400C178 388 158 378 144 374C156 380 176 394 190 406Z" opacity="0.88" />
        <path d="M144 374C132 364 116 358 104 356C114 360 130 370 144 380Z" opacity="0.72" />
        <path d="M190 340C176 326 154 314 138 308C152 316 174 332 190 346Z" opacity="0.82" />
        <path d="M138 308C124 298 108 292 96 290C108 294 124 304 138 314Z" opacity="0.68" />
        <path d="M190 280C178 268 160 256 146 250C158 258 176 272 190 286Z" opacity="0.78" />
        <path d="M190 220C180 210 164 200 152 196C162 202 178 216 190 226Z" opacity="0.72" />
        <path d="M190 162C182 154 170 146 160 142C168 148 180 158 190 168Z" opacity="0.65" />
      </g>

      {/* Curling tip */}
      <path d="M190 88C188 78 192 68 196 60C194 68 190 78 190 88Z" fill="#4A6B6A" opacity="0.5" />
    </svg>
  )
}

/* ─── Variant 8: Hanging willow / wisteria drape ─── */
function WillowDrape() {
  return (
    <svg viewBox="0 0 360 520" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Cream blob top */}
      <ellipse cx="180" cy="65" rx="120" ry="55" fill="#CFE0C3" opacity="0.4" />

      {/* Main horizontal branch */}
      <path d="M40 90C100 82 200 78 320 92" stroke="#1F363D" strokeWidth="3" strokeLinecap="round" />

      {/* Hanging stems */}
      <g stroke="#4A6B6A" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M80 86C78 150 82 250 76 380" />
        <path d="M130 82C132 160 128 280 134 420" />
        <path d="M180 80C178 170 182 310 176 460" />
        <path d="M230 82C232 145 228 260 234 390" />
        <path d="M280 88C278 165 282 290 276 440" />
      </g>

      {/* Small drooping leaves on stems */}
      <g fill="#70A9A1">
        {/* Stem 1 leaves */}
        <ellipse cx="76" cy="160" rx="10" ry="14" transform="rotate(12 76 160)" opacity="0.8" />
        <ellipse cx="80" cy="240" rx="11" ry="15" transform="rotate(-8 80 240)" opacity="0.75" />
        <ellipse cx="74" cy="320" rx="10" ry="14" transform="rotate(10 74 320)" opacity="0.7" />
        {/* Stem 2 leaves */}
        <ellipse cx="134" cy="180" rx="11" ry="15" transform="rotate(-10 134 180)" opacity="0.82" />
        <ellipse cx="128" cy="275" rx="12" ry="16" transform="rotate(8 128 275)" opacity="0.76" />
        <ellipse cx="136" cy="365" rx="10" ry="14" transform="rotate(-6 136 365)" opacity="0.68" />
        {/* Stem 3 leaves */}
        <ellipse cx="176" cy="190" rx="12" ry="16" transform="rotate(6 176 190)" opacity="0.85" />
        <ellipse cx="182" cy="295" rx="13" ry="17" transform="rotate(-10 182 295)" opacity="0.78" />
        <ellipse cx="174" cy="400" rx="11" ry="15" transform="rotate(8 174 400)" opacity="0.7" />
        {/* Stem 4 leaves */}
        <ellipse cx="234" cy="165" rx="11" ry="15" transform="rotate(-8 234 165)" opacity="0.8" />
        <ellipse cx="228" cy="255" rx="12" ry="16" transform="rotate(10 228 255)" opacity="0.74" />
        <ellipse cx="236" cy="340" rx="10" ry="14" transform="rotate(-6 236 340)" opacity="0.68" />
        {/* Stem 5 leaves */}
        <ellipse cx="276" cy="185" rx="11" ry="15" transform="rotate(8 276 185)" opacity="0.78" />
        <ellipse cx="282" cy="290" rx="12" ry="16" transform="rotate(-10 282 290)" opacity="0.72" />
        <ellipse cx="274" cy="385" rx="10" ry="14" transform="rotate(6 274 385)" opacity="0.65" />
      </g>

      {/* Small accent dots (buds) */}
      <g fill="#D4882B" opacity="0.5">
        <circle cx="78" cy="380" r="4" />
        <circle cx="134" cy="420" r="4" />
        <circle cx="176" cy="458" r="4" />
        <circle cx="234" cy="390" r="4" />
        <circle cx="276" cy="438" r="4" />
      </g>
    </svg>
  )
}

/* ─── Variant 9: Scattered floating leaves with teal arc ─── */
function ScatteredLeaves() {
  return (
    <svg viewBox="0 0 380 500" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Teal arc */}
      <path
        d="M320 60C380 180 350 340 240 440"
        stroke="#70A9A1" strokeWidth="35" strokeLinecap="round" opacity="0.18" fill="none"
      />

      {/* Golden dot cluster */}
      <circle cx="95" cy="120" r="28" fill="#D4882B" opacity="0.25" />
      <circle cx="125" cy="98" r="18" fill="#D4882B" opacity="0.2" />

      {/* Scattered individual leaves — each at a different angle */}
      <g fill="#4A6B6A">
        <path d="M280 95C295 78 312 72 320 70C312 82 296 94 280 102Z" opacity="0.82" />
        <path d="M148 175C136 158 130 140 130 130C140 142 150 160 156 178Z" opacity="0.78" />
        <path d="M262 195C278 182 295 178 305 178C294 186 278 196 262 202Z" opacity="0.75" />
        <path d="M112 260C98 248 88 232 86 222C96 232 108 248 116 264Z" opacity="0.8" />
        <path d="M295 280C308 266 322 260 332 258C322 268 308 280 296 288Z" opacity="0.72" />
        <path d="M165 320C152 305 146 288 146 278C154 290 164 306 170 322Z" opacity="0.76" />
        <path d="M240 360C256 348 272 344 282 344C272 352 256 362 240 368Z" opacity="0.7" />
        <path d="M100 390C88 375 82 358 82 348C90 360 100 376 106 392Z" opacity="0.74" />
        <path d="M210 430C224 418 240 414 250 414C240 422 224 432 210 438Z" opacity="0.68" />
      </g>

      {/* A few accent leaves in lighter color */}
      <g fill="#70A9A1">
        <path d="M220 125C234 112 248 108 258 108C248 116 234 126 220 132Z" opacity="0.65" />
        <path d="M175 240C162 225 156 208 156 198C164 210 174 226 180 242Z" opacity="0.6" />
        <path d="M310 350C322 338 336 334 345 334C336 342 322 352 310 358Z" opacity="0.58" />
      </g>

      {/* Thin floating stems */}
      <g stroke="#4A6B6A" strokeWidth="1" opacity="0.35">
        <path d="M280 100L260 120" />
        <path d="M148 178L160 200" />
        <path d="M262 200L245 218" />
        <path d="M112 264L128 282" />
        <path d="M165 324L178 342" />
        <path d="M240 365L225 382" />
      </g>
    </svg>
  )
}

/* ─── Variant 10: Large tropical leaf (monstera-inspired) ─── */
function TropicalLeaf() {
  return (
    <svg viewBox="0 0 400 520" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Cream oval behind */}
      <ellipse cx="210" cy="260" rx="140" ry="185" fill="#CFE0C3" opacity="0.3" />

      {/* Main stem */}
      <path d="M200 500C198 420 195 340 200 120" stroke="#1F363D" strokeWidth="3" strokeLinecap="round" />

      {/* Large leaf shape — right side */}
      <path
        d="M200 160C220 140 270 120 310 140C345 158 360 210 350 265C340 320 300 360 260 380C235 392 210 395 200 390Z"
        fill="#40798C" opacity="0.7"
      />
      {/* Leaf cut-outs (monstera holes) */}
      <ellipse cx="280" cy="200" rx="18" ry="24" fill="#CFE0C3" opacity="0.5" />
      <ellipse cx="305" cy="260" rx="15" ry="20" fill="#CFE0C3" opacity="0.45" />
      <ellipse cx="260" cy="310" rx="16" ry="22" fill="#CFE0C3" opacity="0.4" />

      {/* Large leaf — left side */}
      <path
        d="M200 200C178 175 128 155 90 170C56 184 40 232 48 285C56 335 95 372 135 388C160 398 190 398 200 394Z"
        fill="#70A9A1" opacity="0.65"
      />
      {/* Left leaf cut-outs */}
      <ellipse cx="115" cy="235" rx="16" ry="22" fill="#CFE0C3" opacity="0.45" />
      <ellipse cx="90" cy="295" rx="14" ry="19" fill="#CFE0C3" opacity="0.4" />
      <ellipse cx="135" cy="340" rx="15" ry="20" fill="#CFE0C3" opacity="0.38" />

      {/* Leaf veins */}
      <g stroke="#1F363D" strokeWidth="1.2" opacity="0.25">
        <path d="M200 180C240 170 290 165 330 180" />
        <path d="M200 240C240 230 290 228 340 245" />
        <path d="M200 300C235 296 270 300 300 315" />
        <path d="M200 350C240 348 265 355 280 370" />
        <path d="M200 210C165 198 125 192 80 205" />
        <path d="M200 265C168 258 130 258 75 272" />
        <path d="M200 320C172 316 140 320 105 335" />
        <path d="M200 370C175 370 150 375 130 385" />
      </g>

      {/* Small accent leaf at top */}
      <path d="M200 128C208 110 222 96 232 90C224 102 212 118 200 132Z" fill="#1F363D" opacity="0.6" />
      <path d="M200 132C192 114 178 98 168 92C176 104 188 120 200 136Z" fill="#1F363D" opacity="0.55" />
    </svg>
  )
}

/* ─── Variant 11: Berry branch with small clustered circles ─── */
function BerryBranch() {
  return (
    <svg viewBox="0 0 360 500" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Soft orange oval */}
      <ellipse cx="260" cy="140" rx="65" ry="85" transform="rotate(-15 260 140)" fill="#D4882B" opacity="0.2" />

      {/* Main branch */}
      <path d="M180 480C175 400 178 300 185 180C190 120 200 75 215 40" stroke="#1F363D" strokeWidth="2.5" strokeLinecap="round" />

      {/* Sub-branches */}
      <g stroke="#1F363D" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M183 380C210 360 240 345 265 338" />
        <path d="M184 310C155 288 130 272 108 262" />
        <path d="M186 250C215 232 245 222 268 218" />
        <path d="M189 195C162 178 138 168 118 162" />
        <path d="M195 140C218 125 240 118 258 115" />
        <path d="M183 430C158 418 135 412 115 408" />
      </g>

      {/* Berry clusters — groups of small circles */}
      {/* Cluster 1 (right) */}
      <g fill="#40798C">
        <circle cx="268" cy="335" r="8" opacity="0.85" />
        <circle cx="280" cy="325" r="6" opacity="0.75" />
        <circle cx="275" cy="345" r="7" opacity="0.8" />
        <circle cx="260" cy="328" r="5" opacity="0.7" />
      </g>
      {/* Cluster 2 (left) */}
      <g fill="#70A9A1">
        <circle cx="105" cy="258" r="8" opacity="0.82" />
        <circle cx="95" cy="248" r="6" opacity="0.72" />
        <circle cx="98" cy="268" r="7" opacity="0.78" />
        <circle cx="112" cy="252" r="5" opacity="0.68" />
      </g>
      {/* Cluster 3 (right) */}
      <g fill="#40798C">
        <circle cx="272" cy="215" r="7" opacity="0.8" />
        <circle cx="282" cy="206" r="6" opacity="0.72" />
        <circle cx="278" cy="225" r="5" opacity="0.75" />
        <circle cx="265" cy="210" r="5" opacity="0.68" />
      </g>
      {/* Cluster 4 (left) */}
      <g fill="#70A9A1">
        <circle cx="115" cy="158" r="7" opacity="0.78" />
        <circle cx="105" cy="150" r="5" opacity="0.7" />
        <circle cx="108" cy="168" r="6" opacity="0.74" />
        <circle cx="122" cy="155" r="5" opacity="0.65" />
      </g>
      {/* Cluster 5 (right) */}
      <g fill="#D4882B">
        <circle cx="260" cy="112" r="6" opacity="0.65" />
        <circle cx="270" cy="105" r="5" opacity="0.58" />
        <circle cx="265" cy="120" r="5" opacity="0.6" />
      </g>
      {/* Cluster 6 (left, lower) */}
      <g fill="#40798C">
        <circle cx="112" cy="405" r="7" opacity="0.8" />
        <circle cx="102" cy="398" r="5" opacity="0.72" />
        <circle cx="105" cy="414" r="6" opacity="0.76" />
      </g>

      {/* Small accent leaves near branches */}
      <g fill="#4A6B6A">
        <path d="M230 355C238 348 248 345 254 344C248 350 238 356 230 360Z" opacity="0.5" />
        <path d="M140 275C132 268 126 260 124 254C130 260 138 270 142 278Z" opacity="0.5" />
        <path d="M230 235C238 228 248 225 254 224C248 230 238 238 230 242Z" opacity="0.45" />
      </g>
    </svg>
  )
}

/* ─── Variant 12: Spiral vine with heart-shaped leaves ─── */
function SpiralVine() {
  return (
    <svg viewBox="0 0 380 520" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Large teal circle behind */}
      <circle cx="190" cy="270" r="130" fill="#70A9A1" opacity="0.12" />

      {/* Spiral vine stem */}
      <path
        d="M190 500C180 460 155 420 140 380C120 330 130 280 165 240C195 205 240 195 270 220C295 240 298 280 275 315C255 345 220 355 195 340C175 328 170 300 185 280C198 264 218 260 232 270"
        stroke="#4A6B6A" strokeWidth="2" strokeLinecap="round" fill="none"
      />

      {/* Continuation stem upward */}
      <path
        d="M232 270C245 278 248 260 240 245C230 225 210 215 190 220C168 226 155 248 162 270"
        stroke="#4A6B6A" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />

      {/* Heart-shaped leaves along the vine */}
      <g fill="#40798C">
        {/* Leaf 1 — bottom */}
        <path d="M170 440C162 430 156 418 162 410C168 402 178 408 180 418C182 408 192 402 198 410C204 418 198 430 190 440C184 446 176 446 170 440Z" opacity="0.82" />
        {/* Leaf 2 */}
        <path d="M128 360C122 352 118 342 122 336C126 330 134 334 135 342C136 334 144 330 148 336C152 342 148 352 142 360C138 364 132 364 128 360Z" opacity="0.76" />
        {/* Leaf 3 */}
        <path d="M145 270C140 264 138 256 141 251C144 246 150 249 151 256C152 249 158 246 161 251C164 256 162 264 157 270C154 273 148 273 145 270Z" opacity="0.72" />
      </g>

      <g fill="#70A9A1">
        {/* Leaf 4 */}
        <path d="M250 296C244 288 240 278 244 272C248 266 256 270 257 278C258 270 266 266 270 272C274 278 270 288 264 296C260 300 254 300 250 296Z" opacity="0.78" />
        {/* Leaf 5 */}
        <path d="M280 245C274 238 270 228 274 222C278 216 286 220 287 228C288 220 296 216 300 222C304 228 300 238 294 245C290 249 284 249 280 245Z" opacity="0.7" />
        {/* Leaf 6 — top */}
        <path d="M208 232C204 226 202 220 204 216C206 212 212 214 213 220C214 214 220 212 222 216C224 220 222 226 218 232C216 234 210 234 208 232Z" opacity="0.65" />
      </g>

      {/* Small golden accent dots along vine */}
      <g fill="#D4882B" opacity="0.45">
        <circle cx="155" cy="400" r="3" />
        <circle cx="135" cy="340" r="3" />
        <circle cx="180" cy="260" r="3" />
        <circle cx="260" cy="280" r="3" />
        <circle cx="290" cy="235" r="3" />
      </g>

      {/* Tendrils / curling whiskers */}
      <g stroke="#4A6B6A" strokeWidth="1" opacity="0.35" fill="none">
        <path d="M170 430C158 435 148 432 145 425" />
        <path d="M130 350C118 348 112 340 114 332" />
        <path d="M262 290C272 295 278 290 278 282" />
        <path d="M145 260C135 255 128 260 128 268" />
      </g>
    </svg>
  )
}
