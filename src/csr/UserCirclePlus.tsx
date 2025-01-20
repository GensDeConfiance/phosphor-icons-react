
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/UserCirclePlus";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNTZhOCw4LDAsMCwxLDgtOGgxNlYzMmE4LDgsMCwwLDEsMTYsMFY0OGgxNmE4LDgsMCwwLDEsMCwxNkgyMDhWODBhOCw4LDAsMCwxLTE2LDBWNjRIMTc2QTgsOCwwLDAsMSwxNjgsNTZabTYyLjU2LDU0LjY4YTEwMy45MiwxMDMuOTIsMCwxLDEtODUuMjQtODUuMjQsOCw4LDAsMCwxLTIuNjQsMTUuNzhBODguMDcsODguMDcsMCwwLDAsNDAsMTI4YTg3LjYyLDg3LjYyLDAsMCwwLDIyLjI0LDU4LjQxQTc5LjY2LDc5LjY2LDAsMCwxLDk4LjMsMTU3LjY2YTQ4LDQ4LDAsMSwxLDU5LjQsMCw3OS42Niw3OS42NiwwLDAsMSwzNi4wNiwyOC43NUE4Ny42Miw4Ny42MiwwLDAsMCwyMTYsMTI4YTg4Ljg1LDg4Ljg1LDAsMCwwLTEuMjItMTQuNjgsOCw4LDAsMSwxLDE1Ljc4LTIuNjRaTTEyOCwxNTJhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsMTI4LDE1MlptMCw2NGE4Ny41Nyw4Ny41NywwLDAsMCw1My45Mi0xOC41LDY0LDY0LDAsMCwwLTEwNy44NCwwQTg3LjU3LDg3LjU3LDAsMCwwLDEyOCwyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsNTZhNCw0LDAsMCwxLDQtNGgyMFYzMmE0LDQsMCwwLDEsOCwwVjUyaDIwYTQsNCwwLDAsMSwwLDhIMjA0VjgwYTQsNCwwLDAsMS04LDBWNjBIMTc2QTQsNCwwLDAsMSwxNzIsNTZabTU0LjYyLDU1LjM0YTk5Ljg5LDk5Ljg5LDAsMSwxLTgyLTgyLDQsNCwwLDAsMS0xLjMyLDcuODlBOTMuNCw5My40LDAsMCwwLDEyOCwzNiw5Miw5MiwwLDAsMCw2Mi44MywxOTIuODdhNzUuNjEsNzUuNjEsMCwwLDEsNDQuNTEtMzQsNDQsNDQsMCwxLDEsNDEuMzIsMCw3NS42MSw3NS42MSwwLDAsMSw0NC41MSwzNEE5MS42OSw5MS42OSwwLDAsMCwyMjAsMTI4YTkzLjU4LDkzLjU4LDAsMCwwLTEuMjctMTUuMzQsNCw0LDAsMCwxLDcuODktMS4zMlpNMTI4LDE1NmEzNiwzNiwwLDEsMC0zNi0zNkEzNiwzNiwwLDAsMCwxMjgsMTU2Wm0wLDY0YTkxLjYxLDkxLjYxLDAsMCwwLDU5LjE0LTIxLjU4LDY4LDY4LDAsMCwwLTExOC4yNywwQTkxLjU2LDkxLjU2LDAsMCwwLDEyOCwyMjBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAsNTZhNiw2LDAsMCwxLDYtNmgxOFYzMmE2LDYsMCwwLDEsMTIsMFY1MGgxOGE2LDYsMCwwLDEsMCwxMkgyMDZWODBhNiw2LDAsMCwxLTEyLDBWNjJIMTc2QTYsNiwwLDAsMSwxNzAsNTZabTU4LjU5LDU1QTEwMS45LDEwMS45LDAsMSwxLDE0NSwyNy40MWE2LDYsMCwxLDEtMiwxMS44M0E5MS42Niw5MS42NiwwLDAsMCwxMjgsMzgsODkuOTUsODkuOTUsMCwwLDAsNjIuNDksMTg5LjY0YTc3LjUzLDc3LjUzLDAsMCwxLDQwLTMxLjM4LDQ2LDQ2LDAsMSwxLDUxLDAsNzcuNTMsNzcuNTMsMCwwLDEsNDAsMzEuMzhBODkuNjUsODkuNjUsMCwwLDAsMjE4LDEyOGE5MS43Niw5MS43NiwwLDAsMC0xLjI0LTE1LDYsNiwwLDEsMSwxMS44My0yWk0xMjgsMTU0YTM0LDM0LDAsMSwwLTM0LTM0QTM0LDM0LDAsMCwwLDEyOCwxNTRabTAsNjRBODkuNTgsODkuNTgsMCwwLDAsMTg0LjU2LDE5OGE2Niw2NiwwLDAsMC0xMTMuMTIsMEE4OS41OCw4OS41OCwwLDAsMCwxMjgsMjE4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNTZhMTIsMTIsMCwwLDEsMTItMTJoMTJWMzJhMTIsMTIsMCwwLDEsMjQsMFY0NGgxMmExMiwxMiwwLDAsMSwwLDI0SDIxMlY4MGExMiwxMiwwLDAsMS0yNCwwVjY4SDE3NkExMiwxMiwwLDAsMSwxNjQsNTZabTcwLjUxLDU0QTEwNy44OCwxMDcuODgsMCwxLDEsMTQ2LDIxLjQ5YTEyLDEyLDAsMCwxLTQsMjMuNjdBODUsODUsMCwwLDAsMTI4LDQ0LDgzLjk0LDgzLjk0LDAsMCwwLDYyLjA1LDE3OS45NGE4My40OCw4My40OCwwLDAsMSwyOS0yMy40Miw1Miw1MiwwLDEsMSw3NCwwLDgzLjM2LDgzLjM2LDAsMCwxLDI5LDIzLjQyQTgzLjUyLDgzLjUyLDAsMCwwLDIxMiwxMjhhODUuMiw4NS4yLDAsMCwwLTEuMTYtMTQsMTIsMTIsMCwwLDEsMjMuNjctNFpNMTI4LDE0OGEyOCwyOCwwLDEsMC0yOC0yOEEyOCwyOCwwLDAsMCwxMjgsMTQ4Wm0wLDY0YTgzLjUzLDgzLjUzLDAsMCwwLDQ4LjQzLTE1LjQzLDYwLDYwLDAsMCwwLTk2Ljg2LDBBODMuNTMsODMuNTMsMCwwLDAsMTI4LDIxMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNzZhNDQsNDQsMCwxLDEtNDQsNDRBNDQsNDQsMCwwLDEsMTI4LDc2Wm00OC0xMmgxNlY4MGE4LDgsMCwwLDAsMTYsMFY2NGgxNmE4LDgsMCwwLDAsMC0xNkgyMDhWMzJhOCw4LDAsMCwwLTE2LDBWNDhIMTc2YTgsOCwwLDAsMCwwLDE2Wm00NS4zNSw0MC4xMWE4LDgsMCwwLDAtNi41Nyw5LjIxQTg4Ljg1LDg4Ljg1LDAsMCwxLDIxNiwxMjhhODcuNjIsODcuNjIsMCwwLDEtMjIuMjQsNTguNDFBNzkuODYsNzkuODYsMCwwLDAsMTcyLDE2NS4xYTQsNCwwLDAsMC00Ljg0LjMyLDU5LjgxLDU5LjgxLDAsMCwxLTc4LjI3LDBBNCw0LDAsMCwwLDg0LDE2NS4xYTc5LjcxLDc5LjcxLDAsMCwwLTIxLjc5LDIxLjMxQTg4LDg4LDAsMCwxLDEyOCw0MGE4OC43Niw4OC43NiwwLDAsMSwxNC42OCwxLjIyLDgsOCwwLDAsMCwyLjY0LTE1Ljc4LDEwMy45MiwxMDMuOTIsMCwxLDAsODUuMjQsODUuMjRBOCw4LDAsMCwwLDIyMS4zNSwxMDQuMTFaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk1Ljc2LDk1Ljc2LDAsMCwxLTMxLjgsNzEuMzdBNzIsNzIsMCwwLDAsMTI4LDE2MGE0MCw0MCwwLDEsMC00MC00MCw0MCw0MCwwLDAsMCw0MCw0MCw3Miw3MiwwLDAsMC02NC4yLDM5LjM3aDBBOTYsOTYsMCwxLDEsMjI0LDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjgsNTZhOCw4LDAsMCwxLDgtOGgxNlYzMmE4LDgsMCwwLDEsMTYsMFY0OGgxNmE4LDgsMCwwLDEsMCwxNkgyMDhWODBhOCw4LDAsMCwxLTE2LDBWNjRIMTc2QTgsOCwwLDAsMSwxNjgsNTZabTYyLjU2LDU0LjY4YTEwMy45MiwxMDMuOTIsMCwxLDEtODUuMjQtODUuMjQsOCw4LDAsMCwxLTIuNjQsMTUuNzhBODguMDcsODguMDcsMCwwLDAsNDAsMTI4YTg3LjYyLDg3LjYyLDAsMCwwLDIyLjI0LDU4LjQxQTc5LjY2LDc5LjY2LDAsMCwxLDk4LjMsMTU3LjY2YTQ4LDQ4LDAsMSwxLDU5LjQsMCw3OS42Niw3OS42NiwwLDAsMSwzNi4wNiwyOC43NUE4Ny42Miw4Ny42MiwwLDAsMCwyMTYsMTI4YTg4Ljg1LDg4Ljg1LDAsMCwwLTEuMjItMTQuNjgsOCw4LDAsMSwxLDE1Ljc4LTIuNjRaTTEyOCwxNTJhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsMTI4LDE1MlptMCw2NGE4Ny41Nyw4Ny41NywwLDAsMCw1My45Mi0xOC41LDY0LDY0LDAsMCwwLTEwNy44NCwwQTg3LjU3LDg3LjU3LDAsMCwwLDEyOCwyMTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "UserCirclePlus";
export { I as UserCirclePlus }
