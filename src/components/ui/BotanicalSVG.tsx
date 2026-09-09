import { cn } from "@/lib/utils"

interface BotanicalSVGProps {
  variant: 1 | 2 | 3 | 4 | 5 | 6
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
