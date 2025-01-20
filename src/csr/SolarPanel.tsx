
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SolarPanel";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiwxMDRhOCw4LDAsMCwxLDgtOEg1NmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsMTA0Wk03MS40Myw1OC43NUE4LDgsMCwwLDAsODIuNzUsNDcuNDNMNzEuNDMsMzYuMTJBOCw4LDAsMCwwLDYwLjEyLDQ3LjQzWk0xMjgsNDBhOCw4LDAsMCwwLDgtOFYxNmE4LDgsMCwwLDAtMTYsMFYzMkE4LDgsMCwwLDAsMTI4LDQwWm01MC45MSwyMS4wOWE4LDgsMCwwLDAsNS42Ni0yLjM0bDExLjMxLTExLjMyYTgsOCwwLDAsMC0xMS4zMS0xMS4zMUwxNzMuMjUsNDcuNDNhOCw4LDAsMCwwLDUuNjYsMTMuNjZaTTE5MiwxMDRhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsMC0xNkgyMDBBOCw4LDAsMCwwLDE5MiwxMDRaTTg4LDExMmE4LDgsMCwwLDAsOC04LDMyLDMyLDAsMCwxLDY0LDAsOCw4LDAsMCwwLDE2LDAsNDgsNDgsMCwwLDAtOTYsMEE4LDgsMCwwLDAsODgsMTEyWk0yMzguOTEsMjIwYTgsOCwwLDAsMS02LjkxLDRIMjRhOCw4LDAsMCwxLTctMTEuOTRsNDAuNjktNzJhOCw4LDAsMCwxLDctNC4wNkgxOTEuM2E4LDgsMCwwLDEsNyw0LjA2bDQwLjY5LDcyQTgsOCwwLDAsMSwyMzguOTEsMjIwWm0tNTIuMjctNjhIMTYyLjI3bDMuNDgsMTZoMjkuOTNabS0zNy4yNiwxNi0zLjQ4LTE2SDExMC4xbC0zLjQ4LDE2Wm0tNDYuMjQsMTYtNS4yMSwyNGg2MC4xNGwtNS4yMS0yNFpNNjAuMzIsMTY4SDkwLjI1bDMuNDgtMTZINjkuMzZaTTM3LjcxLDIwOEg4MS41NWw1LjIyLTI0SDUxLjI4Wm0xODAuNTgsMC0xMy41Ny0yNEgxNjkuMjNsNS4yMiwyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiwxMDRhNCw0LDAsMCwxLDQtNEg1NmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiwxMDRaTTc0LjI2LDU1LjkyYTQsNCwwLDEsMCw1LjY2LTUuNjZMNjguNiwzOUE0LDQsMCwwLDAsNjMsNDQuNlpNMTI4LDM2YTQsNCwwLDAsMCw0LTRWMTZhNCw0LDAsMCwwLTgsMFYzMkE0LDQsMCwwLDAsMTI4LDM2Wm01MC45MSwyMS4wOWE0LDQsMCwwLDAsMi44My0xLjE3TDE5My4wNSw0NC42QTQsNCwwLDEsMCwxODcuNCwzOUwxNzYuMDgsNTAuMjZhNCw0LDAsMCwwLDIuODMsNi44M1pNMjAwLDEwOGgxNmE0LDQsMCwwLDAsMC04SDIwMGE0LDQsMCwwLDAsMCw4Wk04OCwxMDhhNCw0LDAsMCwwLDQtNCwzNiwzNiwwLDAsMSw3MiwwLDQsNCwwLDAsMCw4LDAsNDQsNDQsMCwwLDAtODgsMEE0LDQsMCwwLDAsODgsMTA4Wk0yMzUuNDUsMjE4YTQsNCwwLDAsMS0zLjQ1LDJIMjRhNCw0LDAsMCwxLTMuNDgtNmw0MC42OS03MmE0LDQsMCwwLDEsMy40OS0ySDE5MS4zYTQsNCwwLDAsMSwzLjQ5LDJsNDAuNjksNzJBNCw0LDAsMCwxLDIzNS40NSwyMThaTTE4OSwxNDhIMTU3LjMxbDUuMjIsMjRoNDBabS0zNC42MywyNC01LjIyLTI0SDEwNi44OGwtNS4yMiwyNFptLTU0LjQyLDgtNywzMkgxNjNsLTctMzJabS00Ni40Ni04aDQwbDUuMjItMjRINjdabS0yMi42LDQwSDg0Ljc4bDctMzJINDguOTRabTE5NC4yOCwwLTE4LjA4LTMySDE2NC4yN2w2Ljk1LDMyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNCwxMDRhNiw2LDAsMCwxLDYtNkg1NmE2LDYsMCwwLDEsMCwxMkg0MEE2LDYsMCwwLDEsMzQsMTA0Wk03Mi44NCw1Ny4zM2E2LDYsMCwxLDAsOC40OS04LjQ4TDcwLDM3LjUzQTYsNiwwLDAsMCw2MS41Myw0NlpNMTI4LDM4YTYsNiwwLDAsMCw2LTZWMTZhNiw2LDAsMCwwLTEyLDBWMzJBNiw2LDAsMCwwLDEyOCwzOFptNTAuOTEsMjEuMDlhNiw2LDAsMCwwLDQuMjUtMS43NkwxOTQuNDcsNDZBNiw2LDAsMCwwLDE4NiwzNy41M0wxNzQuNjcsNDguODVhNiw2LDAsMCwwLDQuMjQsMTAuMjRaTTE5NCwxMDRhNiw2LDAsMCwwLDYsNmgxNmE2LDYsMCwwLDAsMC0xMkgyMDBBNiw2LDAsMCwwLDE5NCwxMDRaTTg4LDExMGE2LDYsMCwwLDAsNi02LDM0LDM0LDAsMCwxLDY4LDAsNiw2LDAsMCwwLDEyLDAsNDYsNDYsMCwwLDAtOTIsMEE2LDYsMCwwLDAsODgsMTEwWk0yMzcuMTgsMjE5YTYsNiwwLDAsMS01LjE4LDNIMjRhNiw2LDAsMCwxLTUuMjItOC45NWw0MC42OS03MkE2LDYsMCwwLDEsNjQuNywxMzhIMTkxLjNhNiw2LDAsMCwxLDUuMjMsMy4wNWw0MC42OSw3MkE2LDYsMCwwLDEsMjM3LjE4LDIxOVpNMTg3LjgsMTUwaC0yOGw0LjM1LDIwaDM1Wm0tMzUuOTQsMjAtNC4zNS0yMGgtMzlsLTQuMzUsMjBabS01MC4zMywxMi02LjA5LDI4aDY1LjEybC02LjA5LTI4Wk01Ni44OSwxNzBoMzVsNC4zNS0yMGgtMjhaTTM0LjI4LDIxMEg4My4xNmw2LjA5LTI4SDUwLjExWm0xODcuNDQsMC0xNS44My0yOEgxNjYuNzVsNi4wOSwyOFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiwxMDBBMTIsMTIsMCwwLDEsNDQsODhoOGExMiwxMiwwLDAsMSwwLDI0SDQ0QTEyLDEyLDAsMCwxLDMyLDEwMFptOTYtNjRhMTIsMTIsMCwwLDAsMTItMTJWMTZhMTIsMTIsMCwwLDAtMjQsMHY4QTEyLDEyLDAsMCwwLDEyOCwzNlpNNjUuNzcsNTQuNzRhMTIsMTIsMCwxLDAsMTctMTdsLTUuNjYtNS42NWExMiwxMiwwLDAsMC0xNywxN1ptMTE2LDMuNTJhMTIsMTIsMCwwLDAsOC40OS0zLjUybDUuNjUtNS42NWExMiwxMiwwLDAsMC0xNy0xN2wtNS42Niw1LjY1YTEyLDEyLDAsMCwwLDguNDksMjAuNDlaTTE5MiwxMDBhMTIsMTIsMCwwLDAsMTIsMTJoOGExMiwxMiwwLDAsMCwwLTI0aC04QTEyLDEyLDAsMCwwLDE5MiwxMDBaTTg4LDExMmExMiwxMiwwLDAsMCwxMi0xMiwyOCwyOCwwLDAsMSw1NiwwLDEyLDEyLDAsMCwwLDI0LDAsNTIsNTIsMCwwLDAtMTA0LDBBMTIsMTIsMCwwLDAsODgsMTEyWk0yNDIuMzYsMjIyLjA1QTEyLDEyLDAsMCwxLDIzMiwyMjhIMjRhMTIsMTIsMCwwLDEtMTAuNDUtMTcuOWw0My03NkExMiwxMiwwLDAsMSw2NywxMjhIMTg5YTEyLDEyLDAsMCwxLDEwLjQ1LDYuMWw0Myw3NkExMiwxMiwwLDAsMSwyNDIuMzYsMjIyLjA1Wk0xODIsMTUySDE0MHYxMmg0OC44MlpNNzQsMTUybC02Ljc4LDEySDExNlYxNTJaTTQ0LjU3LDIwNEgxMTZWMTg4SDUzLjYxWm0xNjYuODYsMC05LTE2SDE0MHYxNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiwxMDRhOCw4LDAsMCwxLDgtOEg1NmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsMTA0Wk03MS40Myw1OC43NUE4LDgsMCwwLDAsODIuNzUsNDcuNDNMNzEuNDMsMzYuMTJBOCw4LDAsMCwwLDYwLjEyLDQ3LjQzWk0xMjgsNDBhOCw4LDAsMCwwLDgtOFYxNmE4LDgsMCwwLDAtMTYsMFYzMkE4LDgsMCwwLDAsMTI4LDQwWm01MC45MSwyMS4wOWE4LDgsMCwwLDAsNS42Ni0yLjM0bDExLjMxLTExLjMyYTgsOCwwLDAsMC0xMS4zMS0xMS4zMUwxNzMuMjUsNDcuNDNhOCw4LDAsMCwwLDUuNjYsMTMuNjZaTTE5MiwxMDRhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsMC0xNkgyMDBBOCw4LDAsMCwwLDE5MiwxMDRaTTg4LDExMmE4LDgsMCwwLDAsOC04LDMyLDMyLDAsMCwxLDY0LDAsOCw4LDAsMCwwLDE2LDAsNDgsNDgsMCwwLDAtOTYsMEE4LDgsMCwwLDAsODgsMTEyWm01NS4yLDI0SDExMi44YTQsNCwwLDAsMC0zLjkxLDMuMTVMMTAyLjYyLDE2OGg1MC43NmwtNi4yNy0yOC44NUE0LDQsMCwwLDAsMTQzLjIsMTM2Wk0zMS43NSwxODYsMTcsMjEyLjA2YTgsOCwwLDAsMCwxLjE2LDkuNDUsOC4yMiw4LjIyLDAsMCwwLDYsMi40OUg3MC44NWE0LDQsMCwwLDAsMy45MS0zLjE1bDgtMzYuODVIMzUuMjNBNCw0LDAsMCwwLDMxLjc1LDE4NlptMjA3LjIxLDI2LTE0LjcxLTI2YTQsNCwwLDAsMC0zLjQ4LTJIMTczLjIzbDgsMzYuODVhNCw0LDAsMCwwLDMuOTEsMy4xNWg0Ni42MmE4LjIyLDguMjIsMCwwLDAsNi0yLjQ5QTgsOCwwLDAsMCwyMzksMjEyLjA2Wm0tMjguMjctNTAtMTIuNDItMjJhOCw4LDAsMCwwLTctNC4wNkgxNjcuNzZhNCw0LDAsMCwwLTMuOTEsNC44NWw1LjksMjcuMTVIMjA3LjJBNCw0LDAsMCwwLDIxMC42OSwxNjJaTTg4LjI0LDEzNkg2NC43YTgsOCwwLDAsMC03LDQuMDZMNDUuMzEsMTYyYTQsNCwwLDAsMCwzLjQ5LDZIODYuMjVsNS45LTI3LjE1QTQsNCwwLDAsMCw4OC4yNCwxMzZabTY4LjYyLDQ4SDk5LjE0TDkxLjUsMjE5LjE1QTQsNCwwLDAsMCw5NS40MSwyMjRoNjUuMThhNCw0LDAsMCwwLDMuOTEtNC44NVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDI0bDQwLjctNzJIMTkxLjNaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMzIsMTA0YTgsOCwwLDAsMSw4LThINTZhOCw4LDAsMCwxLDAsMTZINDBBOCw4LDAsMCwxLDMyLDEwNFpNNzEuNDMsNTguNzVBOCw4LDAsMCwwLDgyLjc1LDQ3LjQzTDcxLjQzLDM2LjEyQTgsOCwwLDAsMCw2MC4xMiw0Ny40M1pNMTI4LDQwYTgsOCwwLDAsMCw4LThWMTZhOCw4LDAsMCwwLTE2LDBWMzJBOCw4LDAsMCwwLDEyOCw0MFptNTAuOTEsMjEuMDlhOCw4LDAsMCwwLDUuNjYtMi4zNGwxMS4zMS0xMS4zMmE4LDgsMCwwLDAtMTEuMzEtMTEuMzFMMTczLjI1LDQ3LjQzYTgsOCwwLDAsMCw1LjY2LDEzLjY2Wk0xOTIsMTA0YTgsOCwwLDAsMCw4LDhoMTZhOCw4LDAsMCwwLDAtMTZIMjAwQTgsOCwwLDAsMCwxOTIsMTA0Wk04OCwxMTJhOCw4LDAsMCwwLDgtOCwzMiwzMiwwLDAsMSw2NCwwLDgsOCwwLDAsMCwxNiwwLDQ4LDQ4LDAsMCwwLTk2LDBBOCw4LDAsMCwwLDg4LDExMlpNMjM4LjkxLDIyMGE4LDgsMCwwLDEtNi45MSw0SDI0YTgsOCwwLDAsMS03LTExLjk0bDQwLjY5LTcyYTgsOCwwLDAsMSw3LTQuMDZIMTkxLjNhOCw4LDAsMCwxLDcsNC4wNmw0MC42OSw3MkE4LDgsMCwwLDEsMjM4LjkxLDIyMFptLTUyLjI3LTY4SDE2Mi4yN2wzLjQ4LDE2aDI5LjkzWm0tMzcuMjYsMTYtMy40OC0xNkgxMTAuMWwtMy40OCwxNlptLTQ2LjI0LDE2LTUuMjEsMjRoNjAuMTRsLTUuMjEtMjRaTTYwLjMyLDE2OEg5MC4yNWwzLjQ4LTE2SDY5LjM2Wk0zNy43MSwyMDhIODEuNTVsNS4yMi0yNEg1MS4yOFptMTgwLjU4LDAtMTMuNTctMjRIMTY5LjIzbDUuMjIsMjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SolarPanel";
export { I as SolarPanel }
