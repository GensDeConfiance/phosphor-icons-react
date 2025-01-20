
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/BuildingOffice";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjA4SDIzMlY5NmE4LDgsMCwwLDAsMC0xNkgxODRWNDhhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZWMjA4SDI0YTgsOCwwLDAsMCwwLDE2SDI0OGE4LDgsMCwwLDAsMC0xNlpNMjE2LDk2VjIwOEgxODRWOTZaTTU2LDQ4SDE2OFYyMDhIMTQ0VjE2MGE4LDgsMCwwLDAtOC04SDg4YTgsOCwwLDAsMC04LDh2NDhINTZabTcyLDE2MEg5NlYxNjhoMzJaTTcyLDgwYTgsOCwwLDAsMSw4LThIOTZhOCw4LDAsMCwxLDAsMTZIODBBOCw4LDAsMCwxLDcyLDgwWm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTI4QTgsOCwwLDAsMSwxMjAsODBaTTcyLDEyMGE4LDgsMCwwLDEsOC04SDk2YTgsOCwwLDAsMSwwLDE2SDgwQTgsOCwwLDAsMSw3MiwxMjBabTQ4LDBhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkgxMjhBOCw4LDAsMCwxLDEyMCwxMjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjEySDIyOFY5Mmg0YTQsNCwwLDAsMCwwLThIMTgwVjQ0aDRhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4aDRWMjEySDI0YTQsNCwwLDAsMCwwLDhIMjQ4YTQsNCwwLDAsMCwwLThaTTIyMCw5MlYyMTJIMTgwVjkyWk01Miw0NEgxNzJWMjEySDE0MFYxNjBhNCw0LDAsMCwwLTQtNEg4OGE0LDQsMCwwLDAtNCw0djUySDUyWm04MCwxNjhIOTJWMTY0aDQwWk03Niw4MGE0LDQsMCwwLDEsNC00SDk2YTQsNCwwLDAsMSwwLDhIODBBNCw0LDAsMCwxLDc2LDgwWm00OCwwYTQsNCwwLDAsMSw0LTRoMTZhNCw0LDAsMCwxLDAsOEgxMjhBNCw0LDAsMCwxLDEyNCw4MFpNODAsMTI0YTQsNCwwLDAsMSwwLThIOTZhNCw0LDAsMCwxLDAsOFptNDQtNGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIMTI4QTQsNCwwLDAsMSwxMjQsMTIwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjEwSDIzMFY5NGgyYTYsNiwwLDAsMCwwLTEySDE4MlY0NmgyYTYsNiwwLDAsMCwwLTEySDQwYTYsNiwwLDAsMCwwLDEyaDJWMjEwSDI0YTYsNiwwLDAsMCwwLDEySDI0OGE2LDYsMCwwLDAsMC0xMlpNMjE4LDk0VjIxMEgxODJWOTRaTTU0LDQ2SDE3MFYyMTBIMTQyVjE2MGE2LDYsMCwwLDAtNi02SDg4YTYsNiwwLDAsMC02LDZ2NTBINTRabTc2LDE2NEg5NFYxNjZoMzZaTTc0LDgwYTYsNiwwLDAsMSw2LTZIOTZhNiw2LDAsMCwxLDAsMTJIODBBNiw2LDAsMCwxLDc0LDgwWm00OCwwYTYsNiwwLDAsMSw2LTZoMTZhNiw2LDAsMCwxLDAsMTJIMTI4QTYsNiwwLDAsMSwxMjIsODBaTTgwLDEyNmE2LDYsMCwwLDEsMC0xMkg5NmE2LDYsMCwwLDEsMCwxMlptNDItNmE2LDYsMCwwLDEsNi02aDE2YTYsNiwwLDAsMSwwLDEySDEyOEE2LDYsMCwwLDEsMTIyLDEyMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMjA0SDIzMlY5OS4zQTEyLDEyLDAsMCwwLDIyOCw3NkgxODhWNTEuM0ExMiwxMiwwLDAsMCwxODQsMjhINDBhMTIsMTIsMCwwLDAtNCwyMy4zVjIwNEgyNGExMiwxMiwwLDAsMCwwLDI0SDI0NGExMiwxMiwwLDAsMCwwLTI0Wk0yMDgsMTAwVjIwNEgxODhWMTAwWk02MCw1MkgxNjRWMjA0SDE0OFYxNjBhMTIsMTIsMCwwLDAtMTItMTJIODhhMTIsMTIsMCwwLDAtMTIsMTJ2NDRINjBabTY0LDE1MkgxMDBWMTcyaDI0Wk03Miw4MEExMiwxMiwwLDAsMSw4NCw2OGg4YTEyLDEyLDAsMCwxLDAsMjRIODRBMTIsMTIsMCwwLDEsNzIsODBabTQ4LDBhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0aC04QTEyLDEyLDAsMCwxLDEyMCw4MFpNNzIsMTIwYTEyLDEyLDAsMCwxLDEyLTEyaDhhMTIsMTIsMCwwLDEsMCwyNEg4NEExMiwxMiwwLDAsMSw3MiwxMjBabTQ4LDBhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0aC04QTEyLDEyLDAsMCwxLDEyMCwxMjBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMjA4SDIzMlY5NmE4LDgsMCwwLDAsMC0xNkgxODRWNDhhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZWMjA4SDI0YTgsOCwwLDAsMCwwLDE2SDI0OGE4LDgsMCwwLDAsMC0xNlpNODAsNzJIOTZhOCw4LDAsMCwxLDAsMTZIODBhOCw4LDAsMCwxLDAtMTZabS04LDQ4YTgsOCwwLDAsMSw4LThIOTZhOCw4LDAsMCwxLDAsMTZIODBBOCw4LDAsMCwxLDcyLDEyMFptNjQsODhIODhWMTYwaDQ4Wm04LTgwSDEyOGE4LDgsMCwwLDEsMC0xNmgxNmE4LDgsMCwwLDEsMCwxNlptMC00MEgxMjhhOCw4LDAsMCwxLDAtMTZoMTZhOCw4LDAsMCwxLDAsMTZabTcyLDEyMEgxODRWOTZoMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNDBWMjE2SDEzNlYxNjBIODh2NTZINDhWNDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ4LDIwOEgyMzJWOTZhOCw4LDAsMCwwLDAtMTZIMTg0VjQ4YTgsOCwwLDAsMCwwLTE2SDQwYTgsOCwwLDAsMCwwLDE2VjIwOEgyNGE4LDgsMCwwLDAsMCwxNkgyNDhhOCw4LDAsMCwwLDAtMTZaTTIxNiw5NlYyMDhIMTg0Vjk2Wk01Niw0OEgxNjhWMjA4SDE0NFYxNjBhOCw4LDAsMCwwLTgtOEg4OGE4LDgsMCwwLDAtOCw4djQ4SDU2Wm03MiwxNjBIOTZWMTY4aDMyWk03Miw4MGE4LDgsMCwwLDEsOC04SDk2YTgsOCwwLDAsMSwwLDE2SDgwQTgsOCwwLDAsMSw3Miw4MFptNDgsMGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDEyOEE4LDgsMCwwLDEsMTIwLDgwWk03MiwxMjBhOCw4LDAsMCwxLDgtOEg5NmE4LDgsMCwwLDEsMCwxNkg4MEE4LDgsMCwwLDEsNzIsMTIwWm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTI4QTgsOCwwLDAsMSwxMjAsMTIwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BuildingOffice";
export { I as BuildingOffice }
