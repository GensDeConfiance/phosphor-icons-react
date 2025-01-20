
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Tabs";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuNjYsMTY1LjdoMHYwYS4yNC4yNCwwLDAsMCwwLS4wOEwyMzMuMzcsOTEuNEExNS44OSwxNS44OSwwLDAsMCwyMTguMDUsODBIMjA4YTgsOCwwLDAsMCwwLDE2aDEwLjA1bDE5LjIsNjRIMjA2TDE4NS4zNyw5MS40QTE1Ljg5LDE1Ljg5LDAsMCwwLDE3MC4wNSw4MEgxNjBhOCw4LDAsMCwwLDAsMTZoMTAuMDVsMTkuMiw2NEgxNThMMTM3LjM3LDkxLjRBMTUuODksMTUuODksMCwwLDAsMTIyLjA1LDgwSDM4QTE1Ljg5LDE1Ljg5LDAsMCwwLDIyLjYzLDkxLjRMLjM3LDE2NS42bDAsLjA1djBzMCwuMDUsMCwuMDhBOC4xLDguMSwwLDAsMCwwLDE2OGE4LDgsMCwwLDAsOCw4SDI0OGE4LDgsMCwwLDAsNy42Ni0xMC4zWk0zOCw5Nmg4NC4xbDE5LjIsNjRIMTguNzVaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEuODEsMTY2Ljg2aDBsLTIyLjI5LTc0LjNBMTEuOTIsMTEuOTIsMCwwLDAsMjE4LjA1LDg0SDIwOGE0LDQsMCwwLDAsMCw4aDEwLjA1YTQsNCwwLDAsMSwzLjgzLDIuODVMMjQyLjYyLDE2NEgyMDNMMTgxLjU0LDkyLjU1QTExLjkyLDExLjkyLDAsMCwwLDE3MC4wNSw4NEgxNjBhNCw0LDAsMCwwLDAsOGgxMC4wNWE0LDQsMCwwLDEsMy44MywyLjg1TDE5NC42MiwxNjRIMTU1TDEzMy41NCw5Mi41NUExMS45MiwxMS45MiwwLDAsMCwxMjIuMDUsODRIMzhhMTEuOTIsMTEuOTIsMCwwLDAtMTEuNDksOC41NUw0LjE3LDE2Ni44NWMwLC4wNiwwLC4xMiwwLC4xN0E0LDQsMCwwLDAsOCwxNzJIMjQ4YTQsNCwwLDAsMCw0LTRBMy44OSwzLjg5LDAsMCwwLDI1MS44MSwxNjYuODZabS0yMTcuNjktNzJBNCw0LDAsMCwxLDM4LDkyaDg0LjFhNCw0LDAsMCwxLDMuODMsMi44NUwxNDYuNjIsMTY0SDEzLjM4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuNzUsMTY2LjI4aDB2MGwwLDBMMjMxLjQ2LDkyYTEzLjkxLDEzLjkxLDAsMCwwLTEzLjQxLTEwSDIwOGE2LDYsMCwwLDAsMCwxMmgxMC4wNUEyLDIsMCwwLDEsMjIwLDk1LjQybDIwLDY2LjU4SDIwNC40NmwtMjEtNzBhMTMuOTEsMTMuOTEsMCwwLDAtMTMuNDEtMTBIMTYwYTYsNiwwLDAsMCwwLDEyaDEwLjA1QTIsMiwwLDAsMSwxNzIsOTUuNDJsMjAsNjYuNThIMTU2LjQ2bC0yMS03MGExMy45MSwxMy45MSwwLDAsMC0xMy40MS0xMEgzOEExMy45MSwxMy45MSwwLDAsMCwyNC41NCw5MkwyLjI4LDE2Ni4ybDAsLjA1djBsMCwuMTVhMi43OSwyLjc5LDAsMCwwLS4xLjM5LjExLjExLDAsMCwwLDAsLjA1QTYsNiwwLDAsMCw4LDE3NEgyNDhhNiw2LDAsMCwwLDUuNzUtNy43MlpNMzYsOTUuNDJBMiwyLDAsMCwxLDM4LDk0aDg0LjFBMiwyLDAsMCwxLDEyNCw5NS40M2wyMCw2Ni41N0gxNi4wNloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuNDksMTY0LjU1aDBsMC0uMDZhLjI5LjI5LDAsMCwwLDAtLjA5TDIzMy4yLDkwLjI1QTE5Ljg3LDE5Ljg3LDAsMCwwLDIxNC4wNSw3NkgyMDRhMTIsMTIsMCwwLDAsMCwyNGg3LjA3bDE2LjgsNTZIMTk2LjkzTDE3Ny4yLDkwLjI1QTE5Ljg3LDE5Ljg3LDAsMCwwLDE1OC4wNSw3NkgxNDhhMTIsMTIsMCwwLDAsMCwyNGg3LjA3bDE2LjgsNTZIMTQwLjkzTDEyMS4yLDkwLjI1QTE5Ljg3LDE5Ljg3LDAsMCwwLDEwMi4wNSw3Nkg0MkExOS44NywxOS44NywwLDAsMCwyMi44LDkwLjI1TC41NSwxNjQuNGEuMjkuMjksMCwwLDAsMCwuMDlsMCwuMDZhNS42OCw1LjY4LDAsMCwwLS4xNi42MkExMiwxMiwwLDAsMCwxMiwxODBIMjQ0YTEyLDEyLDAsMCwwLDExLjQ5LTE1LjQ1Wk00NC45MywxMDBIOTkuMDdsMTYuOCw1NkgyOC4xM1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTY4YTgsOCwwLDAsMS04LDhIOEE4LDgsMCwwLDEsLjM3LDE2NS42TDIyLjYzLDkxLjRBMTUuODksMTUuODksMCwwLDEsMzgsODBoODQuMWExNS44OSwxNS44OSwwLDAsMSwxNS4zMiwxMS40TDE1OCwxNjBoMTUuM0wxNTAuNzksODUuMTVBNCw0LDAsMCwxLDE1NC42Miw4MGgxNS40M2ExNiwxNiwwLDAsMSwxNS4zMiwxMS40TDIwNiwxNjBoMTUuM0wxOTguNzksODUuMTVBNCw0LDAsMCwxLDIwMi42Miw4MGgxNS40M2ExNiwxNiwwLDAsMSwxNS4zMiwxMS40bDIyLjI2LDc0LjE4QTguMTEsOC4xMSwwLDAsMSwyNTYsMTY4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTY4SDhMMzAuMjksOTMuN0E4LDgsMCwwLDEsMzgsODhoODQuMWE4LDgsMCwwLDEsNy42Niw1LjdaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjU1LjY2LDE2NS43aDB2MGEuMjQuMjQsMCwwLDAsMC0uMDhMMjMzLjM3LDkxLjRBMTUuODksMTUuODksMCwwLDAsMjE4LjA1LDgwSDIwOGE4LDgsMCwwLDAsMCwxNmgxMC4wNWwxOS4yLDY0SDIwNkwxODUuMzcsOTEuNEExNS44OSwxNS44OSwwLDAsMCwxNzAuMDUsODBIMTYwYTgsOCwwLDAsMCwwLDE2aDEwLjA1bDE5LjIsNjRIMTU4TDEzNy4zNyw5MS40QTE1Ljg5LDE1Ljg5LDAsMCwwLDEyMi4wNSw4MEgzOEExNS44OSwxNS44OSwwLDAsMCwyMi42Myw5MS40TC4zNywxNjUuNmwwLC4wNXYwczAsLjA1LDAsLjA4QTguMSw4LjEsMCwwLDAsMCwxNjhhOCw4LDAsMCwwLDgsOEgyNDhhOCw4LDAsMCwwLDcuNjYtMTAuM1pNMzgsOTZoODQuMWwxOS4yLDY0SDE4Ljc1WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tabs";
export { I as Tabs }
