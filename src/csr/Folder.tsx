
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Folder";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44NiwxNS44NiwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNCwxNS40LDAsMCwwLDM5LjM4LDIxNkgyMTYuODlBMTUuMTMsMTUuMTMsMCwwLDAsMjMyLDIwMC44OVY4OEExNiwxNiwwLDAsMCwyMTYsNzJaTTQwLDU2SDkyLjY5bDE2LDE2SDQwWk0yMTYsMjAwSDQwVjg4SDIxNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzZIMTI5LjY2TDEwMS4xNyw0Ny41MkExMS45LDExLjksMCwwLDAsOTIuNjksNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwLjYyQTExLjQsMTEuNCwwLDAsMCwzOS4zOCwyMTJIMjE2Ljg5QTExLjEyLDExLjEyLDAsMCwwLDIyOCwyMDAuODlWODhBMTIsMTIsMCwwLDAsMjE2LDc2Wk0zNiw1NmE0LDQsMCwwLDEsNC00SDkyLjY5YTQsNCwwLDAsMSwyLjgyLDEuMTdMMTE4LjM0LDc2SDM2Wk0yMjAsMjAwLjg5YTMuMTIsMy4xMiwwLDAsMS0zLjExLDMuMTFIMzkuMzhBMy4zOSwzLjM5LDAsMCwxLDM2LDIwMC42MlY4NEgyMTZhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzRIMTMwLjQ5bC0yNy45LTI3LjlhMTMuOTQsMTMuOTQsMCwwLDAtOS45LTQuMUg0MEExNCwxNCwwLDAsMCwyNiw1NlYyMDAuNjJBMTMuMzksMTMuMzksMCwwLDAsMzkuMzgsMjE0SDIxNi44OUExMy4xMiwxMy4xMiwwLDAsMCwyMzAsMjAwLjg5Vjg4QTE0LDE0LDAsMCwwLDIxNiw3NFpNNDAsNTRIOTIuNjlhMiwyLDAsMCwxLDEuNDEuNTlMMTEzLjUxLDc0SDM4VjU2QTIsMiwwLDAsMSw0MCw1NFpNMjE4LDIwMC44OWExLjExLDEuMTEsMCwwLDEtMS4xMSwxLjExSDM5LjM4QTEuNCwxLjQsMCwwLDEsMzgsMjAwLjYyVjg2SDIxNmEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhIMTMzLjM5bC0yNi0yOS4yOWEyMCwyMCwwLDAsMC0xNS02LjcxSDQwQTIwLDIwLDAsMCwwLDIwLDUyVjIwMC42MkExOS40MSwxOS40MSwwLDAsMCwzOS4zOCwyMjBIMjE2Ljg5QTE5LjEzLDE5LjEzLDAsMCwwLDIzNiwyMDAuODlWODhBMjAsMjAsMCwwLDAsMjE2LDY4Wk00NCw1Nkg5MC42MWwxMC42NywxMkg0NFpNMjEyLDE5Nkg0NFY5MkgyMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMTMxLjMxTDEwNCw0NC42OUExNS44OCwxNS44OCwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjJBMTUuNDEsMTUuNDEsMCwwLDAsMzkuMzksMjE2aDE3Ny41QTE1LjEzLDE1LjEzLDAsMCwwLDIzMiwyMDAuODlWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk00MCw1Nkg5Mi42OWwxNiwxNkg0MFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsODBIMzJWNTZhOCw4LDAsMCwxLDgtOEg5Mi42OWE4LDgsMCwwLDEsNS42NSwyLjM0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw3MkgxMzEuMzFMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjIwMC42MkExNS40LDE1LjQsMCwwLDAsMzkuMzgsMjE2SDIxNi44OUExNS4xMywxNS4xMywwLDAsMCwyMzIsMjAwLjg5Vjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNOTIuNjksNTZsMTYsMTZINDBWNTZaTTIxNiwyMDBINDBWODhIMjE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Folder";
export { I as Folder, I as FolderNotch }
