
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Beanie";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYyLjE2VjE0NGE5Ni4xOCw5Ni4xOCwwLDAsMC03Mi4zNC05MywyOCwyOCwwLDEsMC00Ny4zMiwwQTk2LjE4LDk2LjE4LDAsMCwwLDMyLDE0NHYxOC4xNkExNiwxNiwwLDAsMCwyNCwxNzZ2MzJhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjE3NkExNiwxNiwwLDAsMCwyMjQsMTYyLjE2Wk0xMTYsMzZhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTE2LDM2Wm0xMiwyOGE4MC4wOSw4MC4wOSwwLDAsMSw4MCw4MHYxNkg0OFYxNDRBODAuMDksODAuMDksMCwwLDEsMTI4LDY0Wm0tOCwxMTJ2MzJIODBWMTc2Wm0xNiwwaDQwdjMySDEzNlptLTk2LDBINjR2MzJINDBabTE3NiwzMkgxOTJWMTc2aDI0djMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTY0LjdWMTQ0YTkyLjE1LDkyLjE1LDAsMCwwLTc1LjU3LTkwLjUzLDI0LDI0LDAsMSwwLTMyLjg2LDBBOTIuMTUsOTIuMTUsMCwwLDAsMzYsMTQ0djIwLjdBMTIsMTIsMCwwLDAsMjgsMTc2djMyYTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlYxNzZBMTIsMTIsMCwwLDAsMjIwLDE2NC43Wk0xMTIsMzZhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTEyLDM2Wm0xNiwyNGE4NC4wOSw4NC4wOSwwLDAsMSw4NCw4NHYyMEg0NFYxNDRBODQuMDksODQuMDksMCwwLDEsMTI4LDYwWm0tNCwxMTJ2NDBINzZWMTcyWm04LDBoNDh2NDBIMTMyWk0zNiwyMDhWMTc2YTQsNCwwLDAsMSw0LTRINjh2NDBINDBBNCw0LDAsMCwxLDM2LDIwOFptMTg0LDBhNCw0LDAsMCwxLTQsNEgxODhWMTcyaDI4YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTYzLjM3VjE0NGE5NC4xNyw5NC4xNywwLDAsMC03My43LTkxLjc5LDI2LDI2LDAsMSwwLTQwLjYsMEE5NC4xNyw5NC4xNywwLDAsMCwzNCwxNDR2MTkuMzdBMTQsMTQsMCwwLDAsMjYsMTc2djMyYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFYxNzZBMTQsMTQsMCwwLDAsMjIyLDE2My4zN1pNMTE0LDM2YTE0LDE0LDAsMSwxLDE0LDE0QTE0LDE0LDAsMCwxLDExNCwzNlptMTQsMjZhODIuMSw4Mi4xLDAsMCwxLDgyLDgydjE4SDQ2VjE0NEE4Mi4xLDgyLjEsMCwwLDEsMTI4LDYyWm0tNiwxMTJ2MzZINzhWMTc0Wm0xMiwwaDQ0djM2SDEzNFpNMzgsMjA4VjE3NmEyLDIsMCwwLDEsMi0ySDY2djM2SDQwQTIsMiwwLDAsMSwzOCwyMDhabTE4MCwwYTIsMiwwLDAsMS0yLDJIMTkwVjE3NGgyNmEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTYwVjE0NGExMDAuMTcsMTAwLjE3LDAsMCwwLTcwLjUyLTk1LjU2LDMyLDMyLDAsMSwwLTU5LDBBMTAwLjE3LDEwMC4xNywwLDAsMCwyOCwxNDR2MTZhMjAsMjAsMCwwLDAtOCwxNnYzMmEyMCwyMCwwLDAsMCwyMCwyMEgyMTZhMjAsMjAsMCwwLDAsMjAtMjBWMTc2QTIwLDIwLDAsMCwwLDIyOCwxNjBaTTEyMCwzNmE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSwxMjAsMzZabTgsMzJhNzYuMDgsNzYuMDgsMCwwLDEsNzYsNzZ2MTJINTJWMTQ0QTc2LjA4LDc2LjA4LDAsMCwxLDEyOCw2OFpNMTE2LDE4MHYyNEg4NFYxODBabTI0LDBoMzJ2MjRIMTQwWm0tOTYsMEg2MHYyNEg0NFptMTY4LDI0SDE5NlYxODBoMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYyLjE2VjE0NGE5Ni4xOCw5Ni4xOCwwLDAsMC03Mi4zNC05MywyOCwyOCwwLDEsMC00Ny4zMiwwQTk2LjE4LDk2LjE4LDAsMCwwLDMyLDE0NHYxOC4xNkExNiwxNiwwLDAsMCwyNCwxNzZ2MzJhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjE3NkExNiwxNiwwLDAsMCwyMjQsMTYyLjE2Wk0xMjAsMTc2djMySDgwVjE3NlptMTYsMGg0MHYzMkgxMzZaTTExNiwzNmExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxMTYsMzZaTTQwLDE3Nkg2NHYzMkg0MFptMTc2LDMySDE5MlYxNzZoMjR2MzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTQ0djI0SDQwVjE0NGE4OCw4OCwwLDAsMSwxNzYsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjQsMTYyLjE2VjE0NGE5Ni4xOCw5Ni4xOCwwLDAsMC03Mi4zNC05MywyOCwyOCwwLDEsMC00Ny4zMiwwQTk2LjE4LDk2LjE4LDAsMCwwLDMyLDE0NHYxOC4xNkExNiwxNiwwLDAsMCwyNCwxNzZ2MzJhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjE3NkExNiwxNiwwLDAsMCwyMjQsMTYyLjE2Wk0xMTYsMzZhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTE2LDM2Wm0xMiwyOGE4MC4wOSw4MC4wOSwwLDAsMSw4MCw4MHYxNkg0OFYxNDRBODAuMDksODAuMDksMCwwLDEsMTI4LDY0Wm0tOCwxMTJ2MzJIODBWMTc2Wm0xNiwwaDQwdjMySDEzNlptLTk2LDBINjR2MzJINDBabTE3NiwzMkgxOTJWMTc2aDI0djMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Beanie";
export { I as Beanie }
