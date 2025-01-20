
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Tray";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTZWMTUyaC0yOC43QTE1Ljg2LDE1Ljg2LDAsMCwwLDE2OCwxNTYuNjlMMTQ4LjY5LDE3NkgxMDcuMzFMODgsMTU2LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDc2LjY5LDE1Mkg0OFY0OFptMCwxNjBINDhWMTY4SDc2LjY5TDk2LDE4Ny4zMUExNS44NiwxNS44NiwwLDAsMCwxMDcuMzEsMTkyaDQxLjM4QTE1Ljg2LDE1Ljg2LDAsMCwwLDE2MCwxODcuMzFMMTc5LjMxLDE2OEgyMDh2NDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZaTTQ4LDQ0SDIwOGE0LDQsMCwwLDEsNCw0VjE1NkgxNzkuMzFhMTIsMTIsMCwwLDAtOC40OCwzLjUxbC0xOS4zMiwxOS4zMmE0LDQsMCwwLDEtMi44MiwxLjE3SDEwNy4zMWE0LDQsMCwwLDEtMi44Mi0xLjE3TDg1LjE3LDE1OS41MUExMiwxMiwwLDAsMCw3Ni42OSwxNTZINDRWNDhBNCw0LDAsMCwxLDQ4LDQ0Wk0yMDgsMjEySDQ4YTQsNCwwLDAsMS00LTRWMTY0SDc2LjY5YTQsNCwwLDAsMSwyLjgyLDEuMTdsMTkuMzIsMTkuMzJhMTIsMTIsMCwwLDAsOC40OCwzLjUxaDQxLjM4YTEyLDEyLDAsMCwwLDguNDgtMy41MWwxOS4zMi0xOS4zMmE0LDQsMCwwLDEsMi44Mi0xLjE3SDIxMnY0NEE0LDQsMCwwLDEsMjA4LDIxMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRaTTQ4LDQ2SDIwOGEyLDIsMCwwLDEsMiwyVjE1NEgxNzkuMzFhMTMuOTQsMTMuOTQsMCwwLDAtOS45LDQuMUwxNTAuMSwxNzcuNDFhMiwyLDAsMCwxLTEuNDEuNTlIMTA3LjMxYTIsMiwwLDAsMS0xLjQxLS41OEw4Ni41OSwxNTguMWExMy45NCwxMy45NCwwLDAsMC05LjktNC4xSDQ2VjQ4QTIsMiwwLDAsMSw0OCw0NlpNMjA4LDIxMEg0OGEyLDIsMCwwLDEtMi0yVjE2Nkg3Ni42OWEyLDIsMCwwLDEsMS40MS41OEw5Ny40MSwxODUuOWExMy45NCwxMy45NCwwLDAsMCw5LjksNC4xaDQxLjM4YTEzLjk0LDEzLjk0LDAsMCwwLDkuOS00LjFsMTkuMzEtMTkuMzFhMiwyLDAsMCwxLDEuNDEtLjU5SDIxMHY0MkEyLDIsMCwwLDEsMjA4LDIxMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDI0djkySDE3OS4zMWExOS44NiwxOS44NiwwLDAsMC0xNC4xNCw1Ljg2TDE0NywxNjhIMTA5TDkwLjgzLDE0OS44NkExOS44NiwxOS44NiwwLDAsMCw3Ni42OSwxNDRINTJWNTJaTTUyLDIwNFYxNjhINzVsMTguMTQsMTguMTRBMTkuODYsMTkuODYsMCwwLDAsMTA3LjMxLDE5Mmg0MS4zOGExOS44NiwxOS44NiwwLDAsMCwxNC4xNC01Ljg2TDE4MSwxNjhoMjN2MzZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDQ4VjE2OEg3Ni42OUw5NiwxODcuMzJBMTUuODksMTUuODksMCwwLDAsMTA3LjMxLDE5Mmg0MS4zOEExNS44NiwxNS44NiwwLDAsMCwxNjAsMTg3LjMxTDE3OS4zMSwxNjhIMjA4djQwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMTYwSDE3OS4zMWE4LDgsMCwwLDAtNS42NiwyLjM0bC0xOS4zMSwxOS4zMmE4LDgsMCwwLDEtNS42NiwyLjM0SDEwNy4zMWE4LDgsMCwwLDEtNS42Ni0yLjM0TDgyLjM0LDE2Mi4zNEE4LDgsMCwwLDAsNzYuNjgsMTYwSDQwVjQ4YTgsOCwwLDAsMSw4LThIMjA4QTgsOCwwLDAsMSwyMTYsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWm0wLDE2VjE1MmgtMjguN0ExNS44NiwxNS44NiwwLDAsMCwxNjgsMTU2LjY5TDE0OC42OSwxNzZIMTA3LjMxTDg4LDE1Ni42OEExNS44OSwxNS44OSwwLDAsMCw3Ni42OSwxNTJINDhWNDhabTAsMTYwSDQ4VjE2OEg3Ni42OUw5NiwxODcuMzJBMTUuODksMTUuODksMCwwLDAsMTA3LjMxLDE5Mmg0MS4zOEExNS44NiwxNS44NiwwLDAsMCwxNjAsMTg3LjMxTDE3OS4zMSwxNjhIMjA4djQwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tray";
export { I as Tray }
