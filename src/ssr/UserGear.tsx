
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/UserGear";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTU3LjY4YTY4LDY4LDAsMSwwLTcxLjksMGMtMjAuNjUsNi43Ni0zOS4yMywxOS4zOS01NC4xNywzNy4xN2E4LDgsMCwxLDAsMTIuMjQsMTAuM0M1MC4yNSwxODEuMTksNzcuOTEsMTY4LDEwOCwxNjhzNTcuNzUsMTMuMTksNzcuODcsMzcuMTVhOCw4LDAsMCwwLDEyLjI2LTEwLjNDMTgzLjE4LDE3Ny4wNywxNjQuNiwxNjQuNDQsMTQ0LDE1Ny42OFpNNTYsMTAwYTUyLDUyLDAsMSwxLDUyLDUyQTUyLjA2LDUyLjA2LDAsMCwxLDU2LDEwMFptMTk2LjI1LDQzLjA3LTQuNjYtMi42OWEyMy42LDIzLjYsMCwwLDAsMC04Ljc2bDQuNjYtMi42OWE4LDgsMCwxLDAtOC0xMy44NmwtNC42NywyLjdhMjMuOTIsMjMuOTIsMCwwLDAtNy41OC00LjM5VjEwOGE4LDgsMCwwLDAtMTYsMHY1LjM4YTIzLjkyLDIzLjkyLDAsMCwwLTcuNTgsNC4zOWwtNC42Ny0yLjdhOCw4LDAsMSwwLTgsMTMuODZsNC42NiwyLjY5YTIzLjYsMjMuNiwwLDAsMCwwLDguNzZsLTQuNjYsMi42OWE4LDgsMCwwLDAsOCwxMy44Nmw0LjY3LTIuN2EyMy45MiwyMy45MiwwLDAsMCw3LjU4LDQuMzlWMTY0YTgsOCwwLDAsMCwxNiwwdi01LjM4YTIzLjkyLDIzLjkyLDAsMCwwLDcuNTgtNC4zOWw0LjY3LDIuN2E3LjkyLDcuOTIsMCwwLDAsNCwxLjA3LDgsOCwwLDAsMCw0LTE0LjkzWk0yMTYsMTM2YTgsOCwwLDEsMSw4LDhBOCw4LDAsMCwxLDIxNiwxMzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzMuMTcsMTU4Ljg0YTY0LDY0LDAsMSwwLTUwLjM0LDBjLTIzLjc2LDUuNDYtNDUuMTgsMTguNjktNjEuODksMzguNTlhNCw0LDAsMSwwLDYuMTIsNS4xNEM0OCwxNzcuNyw3Ni43LDE2NCwxMDgsMTY0czYwLDEzLjcsODAuOTQsMzguNTdhNCw0LDAsMCwwLDYuMTItNS4xNEMxNzguMzUsMTc3LjUzLDE1Ni45MywxNjQuMywxMzMuMTcsMTU4Ljg0Wk01MiwxMDBhNTYsNTYsMCwxLDEsNTYsNTZBNTYuMDYsNTYuMDYsMCwwLDEsNTIsMTAwWm0xOTguMjUsNDYuNTRMMjQzLDE0Mi4zM2ExOS43OCwxOS43OCwwLDAsMCwwLTEyLjY2bDcuMjktNC4yMWE0LDQsMCwxLDAtNC02LjkybC03LjMxLDQuMjFBMjAsMjAsMCwwLDAsMjI4LDExNi40VjEwOGE0LDQsMCwwLDAtOCwwdjguNGEyMCwyMCwwLDAsMC0xMC45NCw2LjM1bC03LjMxLTQuMjFhNCw0LDAsMSwwLTQsNi45Mmw3LjI5LDQuMjFhMTkuNzgsMTkuNzgsMCwwLDAsMCwxMi42NmwtNy4yOSw0LjIxYTQsNCwwLDAsMCwyLDcuNDYsMy45MiwzLjkyLDAsMCwwLDItLjU0bDcuMzEtNC4yMUEyMCwyMCwwLDAsMCwyMjAsMTU1LjZWMTY0YTQsNCwwLDAsMCw4LDB2LTguNGEyMCwyMCwwLDAsMCwxMC45NC02LjM1bDcuMzEsNC4yMWEzLjkyLDMuOTIsMCwwLDAsMiwuNTQsNCw0LDAsMCwwLDItNy40NlpNMjI0LDE0OGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwyMjQsMTQ4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzksMTU4LjI1YTY2LDY2LDAsMSwwLTYyLDBjLTIyLDYuMjMtNDEuODgsMTkuMTYtNTcuNjEsMzcuODlhNiw2LDAsMCwwLDkuMTgsNy43MkM0OS4xLDE3OS40NCw3Ny4zMSwxNjYsMTA4LDE2NnM1OC45LDEzLjQ0LDc5LjQxLDM3Ljg2YTYsNiwwLDEsMCw5LjE4LTcuNzJDMTgwLjg2LDE3Ny40MSwxNjEsMTY0LjQ4LDEzOSwxNTguMjVaTTU0LDEwMGE1NCw1NCwwLDEsMSw1NCw1NEE1NC4wNiw1NC4wNiwwLDAsMSw1NCwxMDBabTE5Ny4yNSw0NC44LTUuOTItMy40MWEyMiwyMiwwLDAsMCwwLTEwLjc4bDUuOTItMy40MWE2LDYsMCwwLDAtNi0xMC40bC01LjkzLDMuNDNhMjIsMjIsMCwwLDAtOS4zMi01LjM5VjEwOGE2LDYsMCwwLDAtMTIsMHY2Ljg0YTIyLDIyLDAsMCwwLTkuMzIsNS4zOWwtNS45My0zLjQzYTYsNiwwLDAsMC02LDEwLjRsNS45MiwzLjQxYTIyLDIyLDAsMCwwLDAsMTAuNzhsLTUuOTIsMy40MWE2LDYsMCwwLDAsNiwxMC40bDUuOTMtMy40M2EyMiwyMiwwLDAsMCw5LjMyLDUuMzlWMTY0YTYsNiwwLDAsMCwxMiwwdi02Ljg0YTIyLDIyLDAsMCwwLDkuMzItNS4zOWw1LjkzLDMuNDNhNiw2LDAsMCwwLDYtMTAuNFpNMjI0LDE0NmExMCwxMCwwLDEsMSwxMC0xMEExMCwxMCwwLDAsMSwyMjQsMTQ2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDguNSwxNTYuNTNhNzIsNzIsMCwxLDAtODksMCwxMjQsMTI0LDAsMCwwLTQ4LjY5LDM1Ljc1LDEyLDEyLDAsMCwwLDE4LjM4LDE1LjQ0QzQ4LjU0LDE4NC42OSw3NS4xMSwxNzIsMTA0LDE3MmMzNywwLDYxLjEyLDE5LjQyLDc0LjgxLDM1LjcyYTEyLDEyLDAsMSwwLDE4LjM4LTE1LjQ0QTEyNCwxMjQsMCwwLDAsMTQ4LjUsMTU2LjUzWk01NiwxMDBhNDgsNDgsMCwxLDEsNDgsNDhBNDguMDUsNDguMDUsMCwwLDEsNTYsMTAwWm0xOTAuNTMsNDAtNy4xMSwyLjMxLDQuMzksNi4wNWExMiwxMiwwLDEsMS0xOS40MSwxNC4xMWwtNC40LTYuMDYtNC40LDYuMDZhMTIsMTIsMCwxLDEtMTkuNDEtMTQuMTFsNC4zOS02LjA1TDE5My40NywxNDBhMTIsMTIsMCwxLDEsNy40MS0yMi44M2w3LjEyLDIuMzFWMTEyYTEyLDEyLDAsMCwxLDI0LDB2Ny40OGw3LjEyLTIuMzFBMTIsMTIsMCwxLDEsMjQ2LjUzLDE0MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguMTMsMTk0Ljg1QTgsOCwwLDAsMSwxOTIsMjA4SDI0YTgsOCwwLDAsMS02LjEyLTEzLjE1YzE0Ljk0LTE3Ljc4LDMzLjUyLTMwLjQxLDU0LjE3LTM3LjE3YTY4LDY4LDAsMSwxLDcxLjksMEMxNjQuNiwxNjQuNDQsMTgzLjE4LDE3Ny4wNywxOTguMTMsMTk0Ljg1Wk0yNTUuMTgsMTU0YTgsOCwwLDAsMS02Ljk0LDQsNy45Miw3LjkyLDAsMCwxLTQtMS4wN2wtNC42Ny0yLjdhMjMuOTIsMjMuOTIsMCwwLDEtNy41OCw0LjM5VjE2NGE4LDgsMCwwLDEtMTYsMHYtNS4zOGEyMy45MiwyMy45MiwwLDAsMS03LjU4LTQuMzlsLTQuNjcsMi43YTcuOTIsNy45MiwwLDAsMS00LDEuMDcsOCw4LDAsMCwxLTQtMTQuOTNsNC42Ni0yLjY5YTIzLjYsMjMuNiwwLDAsMSwwLTguNzZsLTQuNjYtMi42OWE4LDgsMCwxLDEsOC0xMy44Nmw0LjY3LDIuN2EyMy45MiwyMy45MiwwLDAsMSw3LjU4LTQuMzlWMTA4YTgsOCwwLDAsMSwxNiwwdjUuMzhhMjMuOTIsMjMuOTIsMCwwLDEsNy41OCw0LjM5bDQuNjctMi43YTgsOCwwLDEsMSw4LDEzLjg2bC00LjY2LDIuNjlhMjMuNiwyMy42LDAsMCwxLDAsOC43Nmw0LjY2LDIuNjlBOCw4LDAsMCwxLDI1NS4xOCwxNTRaTTIyNCwxNDRhOCw4LDAsMSwwLTgtOEE4LDgsMCwwLDAsMjI0LDE0NFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTAwYTYwLDYwLDAsMSwxLTYwLTYwQTYwLDYwLDAsMCwxLDE2OCwxMDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTQ0LDE1Ny42OGE2OCw2OCwwLDEsMC03MS45LDBjLTIwLjY1LDYuNzYtMzkuMjMsMTkuMzktNTQuMTcsMzcuMTdhOCw4LDAsMSwwLDEyLjI0LDEwLjNDNTAuMjUsMTgxLjE5LDc3LjkxLDE2OCwxMDgsMTY4czU3Ljc1LDEzLjE5LDc3Ljg3LDM3LjE1YTgsOCwwLDAsMCwxMi4yNi0xMC4zQzE4My4xOCwxNzcuMDcsMTY0LjYsMTY0LjQ0LDE0NCwxNTcuNjhaTTU2LDEwMGE1Miw1MiwwLDEsMSw1Miw1MkE1Mi4wNiw1Mi4wNiwwLDAsMSw1NiwxMDBabTE5Ni4yNSw0My4wNy00LjY2LTIuNjlhMjMuNiwyMy42LDAsMCwwLDAtOC43Nmw0LjY2LTIuNjlhOCw4LDAsMSwwLTgtMTMuODZsLTQuNjcsMi43YTIzLjkyLDIzLjkyLDAsMCwwLTcuNTgtNC4zOVYxMDhhOCw4LDAsMCwwLTE2LDB2NS4zOGEyMy45MiwyMy45MiwwLDAsMC03LjU4LDQuMzlsLTQuNjctMi43YTgsOCwwLDEsMC04LDEzLjg2bDQuNjYsMi42OWEyMy42LDIzLjYsMCwwLDAsMCw4Ljc2bC00LjY2LDIuNjlhOCw4LDAsMCwwLDgsMTMuODZsNC42Ny0yLjdhMjMuOTIsMjMuOTIsMCwwLDAsNy41OCw0LjM5VjE2NGE4LDgsMCwwLDAsMTYsMHYtNS4zOGEyMy45MiwyMy45MiwwLDAsMCw3LjU4LTQuMzlsNC42NywyLjdhNy45Miw3LjkyLDAsMCwwLDQsMS4wNyw4LDgsMCwwLDAsNC0xNC45M1pNMjI0LDE0NGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwyMjQsMTQ0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "UserGear";
export { I as UserGear }
