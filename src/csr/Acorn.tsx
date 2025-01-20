
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Acorn";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTA0YTU2LjA2LDU2LjA2LDAsMCwwLTU2LTU2SDEzNmEyNCwyNCwwLDAsMSwyNC0yNCw4LDgsMCwwLDAsMC0xNiw0MCw0MCwwLDAsMC00MCw0MEg4MGE1Ni4wNiw1Ni4wNiwwLDAsMC01Niw1NiwxNiwxNiwwLDAsMCw4LDEzLjgzVjEyOGMwLDM1LjUzLDMzLjEyLDYyLjEyLDU5Ljc0LDgzLjQ5QzEwMy42NiwyMjEuMDcsMTIwLDIzNC4xOCwxMjAsMjQwYTgsOCwwLDAsMCwxNiwwYzAtNS44MiwxNi4zNC0xOC45MywyOC4yNi0yOC41MUMxOTAuODgsMTkwLjEyLDIyNCwxNjMuNTMsMjI0LDEyOFYxMTcuODNBMTYsMTYsMCwwLDAsMjMyLDEwNFpNODAsNjRoOTZhNDAuMDYsNDAuMDYsMCwwLDEsNDAsNDBINDBBNDAsNDAsMCwwLDEsODAsNjRabTc0LjI1LDEzNWMtMTAuNjIsOC41Mi0yMCwxNi0yNi4yNSwyMy4zNy02LjI1LTcuMzItMTUuNjMtMTQuODUtMjYuMjUtMjMuMzdDNzcuOCwxNzkuNzksNDgsMTU1Ljg2LDQ4LDEyOHYtOEgyMDh2OEMyMDgsMTU1Ljg2LDE3OC4yLDE3OS43OSwxNTQuMjUsMTk5WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTA0YTUyLjA2LDUyLjA2LDAsMCwwLTUyLTUySDEzMlY0OGEyOCwyOCwwLDAsMSwyOC0yOCw0LDQsMCwwLDAsMC04LDM2LDM2LDAsMCwwLTM2LDM2djRIODBhNTIuMDYsNTIuMDYsMCwwLDAtNTIsNTIsMTIsMTIsMCwwLDAsOCwxMS4zVjEyOGMwLDMzLjYxLDMyLjI5LDU5LjU0LDU4LjI0LDgwLjM3QzEwOS41NCwyMjAuNjYsMTI0LDIzMi4yNywxMjQsMjQwYTQsNCwwLDAsMCw4LDBjMC03LjczLDE0LjQ2LTE5LjM0LDI5Ljc2LTMxLjYzQzE4Ny43MSwxODcuNTQsMjIwLDE2MS42MSwyMjAsMTI4VjExNS4zQTEyLDEyLDAsMCwwLDIyOCwxMDRabS03MS4yNSw5OC4xM2MtMTIuNTEsMTAuMDUtMjMuMjMsMTguNjUtMjguNzUsMjYuNzktNS41Mi04LjE0LTE2LjI0LTE2Ljc0LTI4Ljc1LTI2Ljc5Qzc0LjYzLDE4Mi4zNyw0NCwxNTcuNzgsNDQsMTI4VjExNkgyMTJ2MTJDMjEyLDE1Ny43OCwxODEuMzcsMTgyLjM3LDE1Ni43NSwyMDIuMTNaTTIxNiwxMDhINDBhNCw0LDAsMCwxLTQtNEE0NC4wNSw0NC4wNSwwLDAsMSw4MCw2MGg5NmE0NC4wNSw0NC4wNSwwLDAsMSw0NCw0NEE0LDQsMCwwLDEsMjE2LDEwOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTA0YTU0LjA2LDU0LjA2LDAsMCwwLTU0LTU0SDEzNFY0OGEyNiwyNiwwLDAsMSwyNi0yNiw2LDYsMCwwLDAsMC0xMiwzOCwzOCwwLDAsMC0zOCwzOHYySDgwYTU0LjA2LDU0LjA2LDAsMCwwLTU0LDU0LDE0LDE0LDAsMCwwLDgsMTIuNjNWMTI4YzAsMzQuNTcsMzIuNzEsNjAuODMsNTksODEuOTMsMTQuMjYsMTEuNDUsMjksMjMuMjksMjksMzAuMDdhNiw2LDAsMCwwLDEyLDBjMC02Ljc4LDE0Ljc1LTE4LjYyLDI5LTMwLjA3LDI2LjI4LTIxLjEsNTktNDcuMzYsNTktODEuOTNWMTE2LjYzQTE0LDE0LDAsMCwwLDIzMCwxMDRaTTgwLDYyaDk2YTQyLDQyLDAsMCwxLDQyLDQyLDIsMiwwLDAsMS0yLDJINDBhMiwyLDAsMCwxLTItMkE0Miw0MiwwLDAsMSw4MCw2MlptNzUuNSwxMzguNThjLTExLjQ4LDkuMjEtMjEuNDgsMTcuMjQtMjcuNSwyNS02LTcuNzItMTYtMTUuNzUtMjcuNS0yNUM3Ni4yMiwxODEuMDgsNDYsMTU2LjgyLDQ2LDEyOFYxMThIMjEwdjEwQzIxMCwxNTYuODIsMTc5Ljc4LDE4MS4wOCwxNTUuNSwyMDAuNThaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTA0YTYwLjA3LDYwLjA3LDAsMCwwLTYwLTYwSDE0MC40QTIwLDIwLDAsMCwxLDE2MCwyOGExMiwxMiwwLDAsMCwwLTI0LDQ0LjA2LDQ0LjA2LDAsMCwwLTQzLjgxLDQwSDgwYTYwLjA3LDYwLjA3LDAsMCwwLTYwLDYwLDIwLDIwLDAsMCwwLDgsMTZ2OGMwLDM3LjQ1LDM0LDY0LjcxLDYxLjIzLDg2LjYxLDEwLjIyLDguMiwyNS42MywyMC41OCwyNi43NywyNS41NmExMiwxMiwwLDAsMCwyNCwwYzEuMTQtNSwxNi41NS0xNy4zNiwyNi43Ny0yNS41NkMxOTQuMDUsMTkyLjcxLDIyOCwxNjUuNDUsMjI4LDEyOHYtOEEyMCwyMCwwLDAsMCwyMzYsMTA0Wk04MCw2OGg5NmEzNi4wNiwzNi4wNiwwLDAsMSwzNS43OCwzMkg0NC4yMkEzNi4wNiwzNi4wNiwwLDAsMSw4MCw2OFptNzEuNzQsMTI3LjljLTkuMTcsNy4zNi0xNy40NiwxNC0yMy43NCwyMC41NS02LjI4LTYuNTMtMTQuNTctMTMuMTktMjMuNzQtMjAuNTVDODEsMTc3LjIsNTIsMTUzLjk0LDUyLDEyOHYtNEgyMDR2NEMyMDQsMTUzLjk0LDE3NSwxNzcuMiwxNTEuNzQsMTk1LjlaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTA0YTU2LjA2LDU2LjA2LDAsMCwwLTU2LTU2SDEzNmEyNCwyNCwwLDAsMSwyNC0yNCw4LDgsMCwwLDAsMC0xNiw0MCw0MCwwLDAsMC00MCw0MEg4MGE1Ni4wNiw1Ni4wNiwwLDAsMC01Niw1NiwxNiwxNiwwLDAsMCw4LDEzLjg0VjEyOGMwLDM1LjUzLDMzLjEyLDYyLjEyLDU5Ljc0LDgzLjQ5QzEwMy42NiwyMjEuMDcsMTIwLDIzNC4xOCwxMjAsMjQwYTgsOCwwLDAsMCwxNiwwYzAtNS44MiwxNi4zNC0xOC45MywyOC4yNi0yOC41MUMxOTAuODgsMTkwLjEyLDIyNCwxNjMuNTMsMjI0LDEyOFYxMTcuODRBMTYsMTYsMCwwLDAsMjMyLDEwNFptLTc3Ljc1LDk1Yy0xMC42Miw4LjUyLTIwLDE2LTI2LjI1LDIzLjM3LTYuMjUtNy4zMi0xNS42My0xNC44NS0yNi4yNS0yMy4zN0M3Ny44LDE3OS43OSw0OCwxNTUuODYsNDgsMTI4di04SDIwOHY4QzIwOCwxNTUuODYsMTc4LjIsMTc5Ljc5LDE1NC4yNSwxOTlaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTEydjE2YzAsNTMtODgsODgtODgsMTEyLDAtMjQtODgtNTktODgtMTEyVjExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsMTA0YTU2LjA2LDU2LjA2LDAsMCwwLTU2LTU2SDEzNmEyNCwyNCwwLDAsMSwyNC0yNCw4LDgsMCwwLDAsMC0xNiw0MCw0MCwwLDAsMC00MCw0MEg4MGE1Ni4wNiw1Ni4wNiwwLDAsMC01Niw1NiwxNiwxNiwwLDAsMCw4LDEzLjgzVjEyOGMwLDM1LjUzLDMzLjEyLDYyLjEyLDU5Ljc0LDgzLjQ5QzEwMy42NiwyMjEuMDcsMTIwLDIzNC4xOCwxMjAsMjQwYTgsOCwwLDAsMCwxNiwwYzAtNS44MiwxNi4zNC0xOC45MywyOC4yNi0yOC41MUMxOTAuODgsMTkwLjEyLDIyNCwxNjMuNTMsMjI0LDEyOFYxMTcuODNBMTYsMTYsMCwwLDAsMjMyLDEwNFpNODAsNjRoOTZhNDAuMDYsNDAuMDYsMCwwLDEsNDAsNDBINDBBNDAsNDAsMCwwLDEsODAsNjRabTc0LjI1LDEzNWMtMTAuNjIsOC41Mi0yMCwxNi0yNi4yNSwyMy4zNy02LjI1LTcuMzItMTUuNjMtMTQuODUtMjYuMjUtMjMuMzdDNzcuOCwxNzkuNzksNDgsMTU1Ljg2LDQ4LDEyOHYtOEgyMDh2OEMyMDgsMTU1Ljg2LDE3OC4yLDE3OS43OSwxNTQuMjUsMTk5WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Acorn";
export { I as Acorn }
