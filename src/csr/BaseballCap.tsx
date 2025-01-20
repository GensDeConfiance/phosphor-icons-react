
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/BaseballCap";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRoMEExMDQuMTIsMTA0LjEyLDAsMCwwLDI0LDEyOHY1NmEyNCwyNCwwLDAsMCwyNCwyNCwyNC4xMSwyNC4xMSwwLDAsMCwxNC4xOC00LjY0Qzc0LjMzLDE5NC41Myw5NS42LDE4NCwxMjgsMTg0czUzLjY3LDEwLjUyLDY1LjgxLDE5LjM1QTI0LDI0LDAsMCwwLDIzMiwxODRWMTI4QTEwNC4xMiwxMDQuMTIsMCwwLDAsMTI4LDI0Wm04OCwxMDR2OC44N2ExNjYsMTY2LDAsMCwwLTQwLjk0LTE4LjIyQTE2NywxNjcsMCwwLDAsMTQ2LjE5LDQxLjksODguMTQsODguMTQsMCwwLDEsMjE2LDEyOFpNMTI4LDQ0LjI3YTE1Mi40NywxNTIuNDcsMCwwLDEsMzAuNCw3MC40NiwxNzAuODUsMTcwLjg1LDAsMCwwLTYwLjg0LDBBMTUzLjMxLDE1My4zMSwwLDAsMSwxMjgsNDQuMjdaTTEwOS44MSw0MS45YTE2NywxNjcsMCwwLDAtMjguODcsNzYuNzZBMTY2LDE2NiwwLDAsMCw0MCwxMzYuODhWMTI4QTg4LjE0LDg4LjE0LDAsMCwxLDEwOS44MSw0MS45Wk0yMTEuNjYsMTkxLjExYTgsOCwwLDAsMS04LjQ0LS42OUMxODkuMTYsMTgwLjIsMTY0LjcsMTY4LDEyOCwxNjhTNjYuODQsMTgwLjIsNTIuNzgsMTkwLjQyYTgsOCwwLDAsMS04LjQ0LjY5QTcuNzcsNy43NywwLDAsMSw0MCwxODRWMTU2LjA3YTE1MiwxNTIsMCwwLDEsMTc2LDBWMTg0QTcuNzcsNy43NywwLDAsMSwyMTEuNjYsMTkxLjExWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLjEyLDEwMC4xMiwwLDAsMCwyOCwxMjh2NTZhMjAsMjAsMCwwLDAsMzEuODQsMTYuMTJDNzIuNDYsMTkxLDk0LjUzLDE4MCwxMjgsMTgwczU1LjU0LDEwLjk0LDY4LjE2LDIwLjEyYTIwLDIwLDAsMCwwLDIxLDEuNjdBMTkuODcsMTkuODcsMCwwLDAsMjI4LDE4NFYxMjhBMTAwLjEyLDEwMC4xMiwwLDAsMCwxMjgsMjhabTkyLDEwMHYxNi4yM2ExNjIuMzEsMTYyLjMxLDAsMCwwLTQ4LjY3LTIyLjQ3LDE2Mi41NiwxNjIuNTYsMCwwLDAtMzQuMTUtODUuMzFBOTIuMTIsOTIuMTIsMCwwLDEsMjIwLDEyOFptLTU2LjktOC4yNmExNjYuNTgsMTY2LjU4LDAsMCwwLTcwLjIsMEM5Ny42NCw3Ni45MywxMjAsNDcuMzEsMTI4LDM4LDEzNiw0Ny4zMiwxNTguMzYsNzYuOTMsMTYzLjEsMTE5Ljc1Wk0xMTguODIsMzYuNDZhMTYyLjU2LDE2Mi41NiwwLDAsMC0zNC4xNSw4NS4zMUExNjIuMzEsMTYyLjMxLDAsMCwwLDM2LDE0NC4yNFYxMjhBOTIuMTIsOTIuMTIsMCwwLDEsMTE4LjgyLDM2LjQ2Wm05NC42NiwxNTguMjFhMTEuODgsMTEuODgsMCwwLDEtMTIuNjEtMUMxODcuMjksMTgzLjc4LDE2My42MiwxNzIsMTI4LDE3MnMtNTkuMjksMTEuNzctNzIuODcsMjEuNjVhMTEuODgsMTEuODgsMCwwLDEtMTIuNjEsMUExMS43NSwxMS43NSwwLDAsMSwzNiwxODRWMTU0YTE1NiwxNTYsMCwwLDEsMTg0LDB2MzBBMTEuNzUsMTEuNzUsMCwwLDEsMjEzLjQ4LDE5NC42N1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLjEyLDEwMi4xMiwwLDAsMCwyNiwxMjh2NTZhMjIsMjIsMCwwLDAsMzUsMTcuNzRjMTIuMzgtOSwzNC4wNi0xOS43NCw2Ny0xOS43NHM1NC42MSwxMC43Myw2NywxOS43M0EyMiwyMiwwLDAsMCwyMzAsMTg0VjEyOEExMDIuMTIsMTAyLjEyLDAsMCwwLDEyOCwyNlptOTAsMTAydjEyLjVhMTY0LjI5LDE2NC4yOSwwLDAsMC00NC44LTIwLjNBMTY1LjA3LDE2NS4wNywwLDAsMCwxNDEuNjksMzksOTAuMTUsOTAuMTUsMCwwLDEsMjE4LDEyOFptLTU3LjIxLTEwLjc4YTE2OC41NiwxNjguNTYsMCwwLDAtNjUuNTgsMGM1LTM4LjM4LDI0LjE2LTY1LjU5LDMyLjc5LTc2LjE0QzEzNi42Myw1MS42NSwxNTUuOCw3OC44NSwxNjAuNzksMTE3LjIzWk0xMTQuMzEsMzlBMTY1LjA3LDE2NS4wNywwLDAsMCw4Mi44LDEyMC4yMSwxNjQuMjksMTY0LjI5LDAsMCwwLDM4LDE0MC41MVYxMjhBOTAuMTUsOTAuMTUsMCwwLDEsMTE0LjMxLDM5Wm05OC4yNiwxNTMuODVBOS45NCw5Ljk0LDAsMCwxLDIwMiwxOTJjLTEzLjgyLTEwLTM3Ljg4LTIyLTc0LTIycy02MC4yMiwxMi03NCwyMmE5LjkyLDkuOTIsMCwwLDEtMTAuNTMuODVBOS43OSw5Ljc5LDAsMCwxLDM4LDE4NFYxNTVhMTU0LDE1NCwwLDAsMSwxODAsMHYyOUE5Ljc5LDkuNzksMCwwLDEsMjEyLjU3LDE5Mi44OVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LjEyLDEwOC4xMiwwLDAsMCwyMCwxMjh2NTZhMjcuODYsMjcuODYsMCwwLDAsMTUuMjYsMjQuOTMsMjgsMjgsMCwwLDAsMjkuMjgtMi4zNEM3Ni4yLDE5OC4xMSw5Ni42OCwxODgsMTI4LDE4OHM1MS44LDEwLjEsNjMuNDYsMTguNThBMjgsMjgsMCwwLDAsMjM2LDE4NFYxMjhBMTA4LjEyLDEwOC4xMiwwLDAsMCwxMjgsMjBabTg0LDEwOHYxLjg3YTE3MCwxNzAsMCwwLDAtMzMuMjktMTQuMywxNzAuODEsMTcwLjgxLDAsMCwwLTIzLjQ1LTY3QTg0LjE0LDg0LjE0LDAsMCwxLDIxMiwxMjhabS01OC40Ni0xOC4xMmExNzQuNDIsMTc0LjQyLDAsMCwwLTUxLjA4LDBBMTUwLDE1MCwwLDAsMSwxMjgsNTAuOTQsMTUwLjA3LDE1MC4wNywwLDAsMSwxNTMuNTQsMTA5Ljg4Wm0tNTIuOC02MS4zMWExNzAuODEsMTcwLjgxLDAsMCwwLTIzLjQ1LDY3QTE3MCwxNzAsMCwwLDAsNDQsMTI5Ljg3VjEyOEE4NC4xNCw4NC4xNCwwLDAsMSwxMDAuNzQsNDguNTdabTEwOS4xMSwxMzlhNCw0LDAsMCwxLTQuMjgtLjM2QzE5MSwxNzYuNjEsMTY1Ljc3LDE2NCwxMjgsMTY0cy02MywxMi42MS03Ny41NywyMy4xOGE0LDQsMCwwLDEtNC4yOC4zNkEzLjc2LDMuNzYsMCwwLDEsNDQsMTg0VjE1OC4xNGExNDgsMTQ4LDAsMCwxLDE2OCwwVjE4NEEzLjc2LDMuNzYsMCwwLDEsMjA5Ljg1LDE4Ny41NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LjEyLDEwNC4xMiwwLDAsMCwyNCwxMjh2NTZhMjQsMjQsMCwwLDAsMjQsMjQsMjQuMTEsMjQuMTEsMCwwLDAsMTQuMTgtNC42NEM3NC4zMywxOTQuNTMsOTUuNiwxODQsMTI4LDE4NHM1My42NywxMC41Miw2NS44MSwxOS4zNUEyNCwyNCwwLDAsMCwyMzIsMTg0VjEyOEExMDQuMTIsMTA0LjEyLDAsMCwwLDEyOCwyNFpNNDAsMTI4QTg4LjE1LDg4LjE1LDAsMCwxLDEwOS44MSw0MS45YTE2NywxNjcsMCwwLDAtMjguODcsNzYuNzZBMTY2LDE2NiwwLDAsMCw0MCwxMzYuODhabTE3Niw1NmE3Ljc3LDcuNzcsMCwwLDEtNC4zNCw3LjEsOCw4LDAsMCwxLTguNDQtLjY5QzE4OS4xNiwxODAuMiwxNjQuNywxNjgsMTI4LDE2OFM2Ni44NCwxODAuMiw1Mi43OCwxOTAuNDJhOCw4LDAsMCwxLTguNDQuNjlBNy43Nyw3Ljc3LDAsMCwxLDQwLDE4NFYxNTYuMDdhMTUwLjYyLDE1MC42MiwwLDAsMSw0OS45My0yMy4yOCw3LjA2LDcuMDYsMCwwLDAsMS0uMjYsMTU0LjA2LDE1NC4wNiwwLDAsMSw3NC4xNywwLDguNjQsOC42NCwwLDAsMCwxLC4yN0ExNTAuNDksMTUwLjQ5LDAsMCwxLDIxNiwxNTYuMDdabTAtNDcuMTNhMTY2LDE2NiwwLDAsMC00MC45NC0xOC4yMkExNjcsMTY3LDAsMCwwLDE0Ni4xOSw0MS45LDg4LjE1LDg4LjE1LDAsMCwxLDIxNiwxMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTUydjMyYTE2LDE2LDAsMCwxLTI1LjQ4LDEyLjg4QzE4Mi41MywxODUuMjYsMTU5LDE3NiwxMjgsMTc2cy01NC41Myw5LjI2LTcwLjUyLDIwLjg4QTE2LDE2LDAsMCwxLDMyLDE4NFYxNTJhMTYwLDE2MCwwLDAsMSwxOTIsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LjEyLDEwNC4xMiwwLDAsMCwyNCwxMjh2NTZhMjQsMjQsMCwwLDAsMjQsMjQsMjQuMTEsMjQuMTEsMCwwLDAsMTQuMTgtNC42NEM3NC4zMywxOTQuNTMsOTUuNiwxODQsMTI4LDE4NHM1My42NywxMC41Miw2NS44MSwxOS4zNUEyNCwyNCwwLDAsMCwyMzIsMTg0VjEyOEExMDQuMTIsMTA0LjEyLDAsMCwwLDEyOCwyNFptODgsMTA0djguODdhMTY2LDE2NiwwLDAsMC00MC45NC0xOC4yMkExNjcsMTY3LDAsMCwwLDE0Ni4xOSw0MS45LDg4LjE1LDg4LjE1LDAsMCwxLDIxNiwxMjhaTTEyOCw0NC4yN2ExNTIuNDcsMTUyLjQ3LDAsMCwxLDMwLjQsNzAuNDYsMTcwLjg1LDE3MC44NSwwLDAsMC02MC44NCwwQTE1My4zMSwxNTMuMzEsMCwwLDEsMTI4LDQ0LjI3Wk0xMDkuODEsNDEuOWExNjcsMTY3LDAsMCwwLTI4Ljg3LDc2Ljc2QTE2NiwxNjYsMCwwLDAsNDAsMTM2Ljg4VjEyOEE4OC4xNSw4OC4xNSwwLDAsMSwxMDkuODEsNDEuOVpNMjExLjY2LDE5MS4xMWE4LDgsMCwwLDEtOC40NC0uNjlDMTg5LjE2LDE4MC4yLDE2NC43LDE2OCwxMjgsMTY4UzY2Ljg0LDE4MC4yLDUyLjc4LDE5MC40MmE4LDgsMCwwLDEtOC40NC42OUE3Ljc3LDcuNzcsMCwwLDEsNDAsMTg0VjE1Ni4wN2ExNTIsMTUyLDAsMCwxLDE3NiwwVjE4NEE3Ljc3LDcuNzcsMCwwLDEsMjExLjY2LDE5MS4xMVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BaseballCap";
export { I as BaseballCap }
