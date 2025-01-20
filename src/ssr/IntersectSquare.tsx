
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/IntersectSquare";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODhIMTY4VjQwYTgsOCwwLDAsMC04LThINDBhOCw4LDAsMCwwLTgsOFYxNjBhOCw4LDAsMCwwLDgsOEg4OHY0OGE4LDgsMCwwLDAsOCw4SDIxNmE4LDgsMCwwLDAsOC04Vjk2QTgsOCwwLDAsMCwyMTYsODhaTTQ4LDE1MlY0OEgxNTJWODhIOTZhOCw4LDAsMCwwLTgsOHY1NlptNTYtMzYuNjlMMTQwLjY5LDE1MkgxMDRabTQ4LDI1LjM4TDExNS4zMSwxMDRIMTUyWk0yMDgsMjA4SDEwNFYxNjhoNTZhOCw4LDAsMCwwLDgtOFYxMDRoNDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTJIMTY0VjQwYTQsNCwwLDAsMC00LTRINDBhNCw0LDAsMCwwLTQsNFYxNjBhNCw0LDAsMCwwLDQsNEg5MnY1MmE0LDQsMCwwLDAsNCw0SDIxNmE0LDQsMCwwLDAsNC00Vjk2QTQsNCwwLDAsMCwyMTYsOTJaTTQ0LDE1NlY0NEgxNTZWOTJIOTZhNCw0LDAsMCwwLTQsNHY2MFptNTYtNTAuMzRMMTUwLjM0LDE1NkgxMDBabTU2LDQ0LjY4TDEwNS42NiwxMDBIMTU2Wk0yMTIsMjEySDEwMFYxNjRoNjBhNCw0LDAsMCwwLDQtNFYxMDBoNDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTBIMTY2VjQwYTYsNiwwLDAsMC02LTZINDBhNiw2LDAsMCwwLTYsNlYxNjBhNiw2LDAsMCwwLDYsNkg5MHY1MGE2LDYsMCwwLDAsNiw2SDIxNmE2LDYsMCwwLDAsNi02Vjk2QTYsNiwwLDAsMCwyMTYsOTBaTTQ2LDE1NFY0NkgxNTRWOTBIOTZhNiw2LDAsMCwwLTYsNnY1OFptNTYtNDMuNTJMMTQ1LjUyLDE1NEgxMDJabTUyLDM1TDExMC40OCwxMDJIMTU0Wk0yMTAsMjEwSDEwMlYxNjZoNThhNiw2LDAsMCwwLDYtNlYxMDJoNDRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODRIMTcyVjQwYTEyLDEyLDAsMCwwLTEyLTEySDQwQTEyLDEyLDAsMCwwLDI4LDQwVjE2MGExMiwxMiwwLDAsMCwxMiwxMkg4NHY0NGExMiwxMiwwLDAsMCwxMiwxMkgyMTZhMTIsMTIsMCwwLDAsMTItMTJWOTZBMTIsMTIsMCwwLDAsMjE2LDg0Wk01MiwxNDhWNTJoOTZWODRIOTZBMTIsMTIsMCwwLDAsODQsOTZ2NTJabTU2LTIzLDIzLDIzSDEwOFpNMTQ4LDEzMWwtMjMtMjNoMjNabTU2LDczSDEwOFYxNzJoNTJhMTIsMTIsMCwwLDAsMTItMTJWMTA4aDMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODhIMTY4VjQwYTgsOCwwLDAsMC04LThINDBhOCw4LDAsMCwwLTgsOFYxNjBhOCw4LDAsMCwwLDgsOEg4OHY0OGE4LDgsMCwwLDAsOCw4SDIxNmE4LDgsMCwwLDAsOC04Vjk2QTgsOCwwLDAsMCwyMTYsODhaTTQ4LDE1MlY0OEgxNTJWODhIOTZhOCw4LDAsMCwwLTgsOHY1NlptMTYwLDU2SDEwNFYxNjhoNTZhOCw4LDAsMCwwLDgtOFYxMDRoNDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsOTZ2NjRIOTZWOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDg4SDE2OFY0MGE4LDgsMCwwLDAtOC04SDQwYTgsOCwwLDAsMC04LDhWMTYwYTgsOCwwLDAsMCw4LDhIODh2NDhhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFY5NkE4LDgsMCwwLDAsMjE2LDg4Wk00OCwxNTJWNDhIMTUyVjg4SDk2YTgsOCwwLDAsMC04LDh2NTZabTEwNC00OHY0OEgxMDRWMTA0Wm01NiwxMDRIMTA0VjE2OGg1NmE4LDgsMCwwLDAsOC04VjEwNGg0MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "IntersectSquare";
export { I as IntersectSquare }
