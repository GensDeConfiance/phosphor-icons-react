
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Coin";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuNTgsNjMuODRDMTg2Ljg1LDUzLjQ4LDE1OS4zMyw0OCwxMjgsNDhTNjkuMTUsNTMuNDgsNDguNDIsNjMuODQsMTYsODguNzgsMTYsMTA0djQ4YzAsMTUuMjIsMTEuODIsMjkuODUsMzIuNDIsNDAuMTZTOTYuNjcsMjA4LDEyOCwyMDhzNTguODUtNS40OCw3OS41OC0xNS44NFMyNDAsMTY3LjIyLDI0MCwxNTJWMTA0QzI0MCw4OC43OCwyMjguMTgsNzQuMTUsMjA3LjU4LDYzLjg0Wk0xMjgsNjRjNjIuNjQsMCw5NiwyMy4yMyw5Niw0MHMtMzMuMzYsNDAtOTYsNDAtOTYtMjMuMjMtOTYtNDBTNjUuMzYsNjQsMTI4LDY0Wm0tOCw5NS44NnYzMmMtMTktLjYyLTM1LTMuNDItNDgtNy40OVYxNTMuMDVBMjAzLjQzLDIwMy40MywwLDAsMCwxMjAsMTU5Ljg2Wm0xNiwwYTIwMy40MywyMDMuNDMsMCwwLDAsNDgtNi44MXYzMS4zMWMtMTMsNC4wNy0yOSw2Ljg3LTQ4LDcuNDlaTTMyLDE1MlYxMzMuNTNhODIuODgsODIuODgsMCwwLDAsMTYuNDIsMTAuNjNjMi40MywxLjIxLDUsMi4zNSw3LjU4LDMuNDNWMTc4QzQwLjE3LDE3MC4xNiwzMiwxNjAuMjksMzIsMTUyWm0xNjgsMjZWMTQ3LjU5YzIuNjEtMS4wOCw1LjE1LTIuMjIsNy41OC0zLjQzQTgyLjg4LDgyLjg4LDAsMCwwLDIyNCwxMzMuNTNWMTUyQzIyNCwxNjAuMjksMjE1LjgzLDE3MC4xNiwyMDAsMTc4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDUuNzksNjcuNDJDMTg1LjksNTcuNDgsMTU4LjI3LDUyLDEyOCw1MlM3MC4xLDU3LjQ4LDUwLjIxLDY3LjQyQzMxLDc3LDIwLDkwLjM1LDIwLDEwNHY0OGMwLDEzLjY1LDExLDI3LDMwLjIxLDM2LjU4QzcwLjEsMTk4LjUyLDk3LjczLDIwNCwxMjgsMjA0czU3LjktNS40OCw3Ny43OS0xNS40MkMyMjUsMTc5LDIzNiwxNjUuNjUsMjM2LDE1MlYxMDRDMjM2LDkwLjM1LDIyNSw3NywyMDUuNzksNjcuNDJaTTEyOCw2MGM2MS43NywwLDEwMCwyMi44NCwxMDAsNDRzLTM4LjIzLDQ0LTEwMCw0NFMyOCwxMjUuMTYsMjgsMTA0LDY2LjIzLDYwLDEyOCw2MFpNMTI0LDE1NnY0MGMtMjItLjM1LTQwLjk0LTMuNjUtNTYtOC43MVYxNDcuNjVDODQuMjMsMTUyLjc1LDEwMy40NCwxNTUuNjIsMTI0LDE1NlptOCwwYzIwLjU2LS4zMywzOS43Ny0zLjIsNTYtOC4zdjM5LjU5Yy0xNS4wNiw1LjA2LTMzLjk1LDguMzYtNTYsOC43MVpNMjgsMTUyVjEyMy45MmM1LjE1LDYuMTksMTIuNjcsMTEuODksMjIuMjEsMTYuNjYsMy4wOCwxLjU0LDYuMzYsMi45NSw5Ljc5LDQuMjh2MzkuMzhDMzkuNDksMTc1LjY3LDI4LDE2My41OSwyOCwxNTJabTIwMCwwYzAsMTEuNTktMTEuNDksMjMuNjctMzIsMzIuMjRWMTQ0Ljg2YzMuNDMtMS4zMyw2LjcxLTIuNzQsOS43OS00LjI4LDkuNTQtNC43NywxNy4wNi0xMC40NywyMi4yMS0xNi42NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYuNjgsNjUuNjNDMTg2LjIzLDU1LjQxLDE1OSw1MCwxMjgsNTBTNjkuNzcsNTUuNDEsNDkuMzIsNjUuNjNDMjkuNDEsNzUuNTgsMTgsODkuNTcsMTgsMTA0djQ4YzAsMTQuNDMsMTEuNDEsMjguNDIsMzEuMzIsMzguMzdDNjkuNzcsMjAwLjU5LDk3LDIwNiwxMjgsMjA2czU4LjIzLTUuNDEsNzguNjgtMTUuNjNDMjI2LjU5LDE4MC40MiwyMzgsMTY2LjQzLDIzOCwxNTJWMTA0QzIzOCw4OS41NywyMjYuNTksNzUuNTgsMjA2LjY4LDY1LjYzWm0tMTUyLDEwLjc0QzczLjIxLDY3LjEsOTkuMjUsNjIsMTI4LDYyczU0Ljc5LDUuMSw3My4zMiwxNC4zN0MyMTcsODQuMjEsMjI2LDk0LjI4LDIyNiwxMDRzLTksMTkuNzktMjQuNjgsMjcuNjNDMTgyLjc5LDE0MC45LDE1Ni43NSwxNDYsMTI4LDE0NnMtNTQuNzktNS4xLTczLjMyLTE0LjM3QzM5LDEyMy43OSwzMCwxMTMuNzIsMzAsMTA0UzM5LDg0LjIxLDU0LjY4LDc2LjM3Wk0xMjIsMTU3LjkzdjM2Yy0xOS4yNC0uNDgtMzcuMDctMy4yOC01Mi04LjExdi0zNS40Qzg1LjI3LDE1NC45MywxMDIuODUsMTU3LjQ5LDEyMiwxNTcuOTNabTEyLDBjMTkuMTUtLjQ0LDM2LjczLTMsNTItNy41MnYzNS40Yy0xNC45Myw0LjgzLTMyLjc2LDcuNjMtNTIsOC4xMVpNMzAsMTUyVjEyOWE3Niw3NiwwLDAsMCwxOS4zMiwxMy4zNnE0LjE2LDIuMDcsOC42OCwzLjg4djM1Yy0xLjEzLS41Mi0yLjI0LTEtMy4zMi0xLjU4QzM5LDE3MS43OSwzMCwxNjEuNzIsMzAsMTUyWm0xNzEuMzIsMjcuNjNjLTEuMDguNTQtMi4xOSwxLjA2LTMuMzIsMS41OHYtMzVxNC41MS0xLjgxLDguNjgtMy44OEE3Niw3NiwwLDAsMCwyMjYsMTI5djIzQzIyNiwxNjEuNzIsMjE3LDE3MS43OSwyMDEuMzIsMTc5LjYzWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDkuMzcsNjAuMjdDMTg4LjA4LDQ5LjYyLDE2MCw0NCwxMjgsNDRTNjcuOTIsNDkuNjIsNDYuNjMsNjAuMjdDMjQuNjIsNzEuMjcsMTIsODcuMjEsMTIsMTA0djQ4YzAsMTYuNzksMTIuNjIsMzIuNzMsMzQuNjMsNDMuNzNDNjcuOTIsMjA2LjM4LDk2LjA1LDIxMiwxMjgsMjEyczYwLjA4LTUuNjIsODEuMzctMTYuMjdjMjItMTEsMzQuNjMtMjYuOTQsMzQuNjMtNDMuNzNWMTA0QzI0NCw4Ny4yMSwyMzEuMzgsNzEuMjcsMjA5LjM3LDYwLjI3Wm0tMTUyLDIxLjQ2Qzc1LjA4LDcyLjg4LDEwMC4xNiw2OCwxMjgsNjhzNTIuOTIsNC44OCw3MC42MywxMy43M0MyMTEuODEsODguMzIsMjIwLDk2Ljg2LDIyMCwxMDRzLTguMTksMTUuNjgtMjEuMzcsMjIuMjdDMTgwLjkyLDEzNS4xMiwxNTUuODQsMTQwLDEyOCwxNDBzLTUyLjkyLTQuODgtNzAuNjMtMTMuNzNDNDQuMTksMTE5LjY4LDM2LDExMS4xNCwzNiwxMDRTNDQuMTksODguMzIsNTcuMzcsODEuNzNaTTE4MCwxODEuMzhhMTgwLjM4LDE4MC4zOCwwLDAsMS00MCw2LjN2LTI0YTIxMC4zOSwyMTAuMzksMCwwLDAsNDAtNS41MVpNNzYsMTU4LjIyYTIxMC4zOSwyMTAuMzksMCwwLDAsNDAsNS41MXYyNGExODAuMzgsMTgwLjM4LDAsMCwxLTQwLTYuM1pNMzYsMTUyVjE0MS41NGE5NC41NCw5NC41NCwwLDAsMCwxMC42Myw2LjE5YzEuNzQuODcsMy41NCwxLjcsNS4zNywyLjVWMTcxLjNDNDIsMTY1LjI0LDM2LDE1OC4xMSwzNiwxNTJabTE2OCwxOS4zVjE1MC4yM2MxLjgzLS44LDMuNjMtMS42Myw1LjM3LTIuNUE5NC41NCw5NC41NCwwLDAsMCwyMjAsMTQxLjU0VjE1MkMyMjAsMTU4LjExLDIxNCwxNjUuMjQsMjA0LDE3MS4zWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuNTgsNjMuODRDMTg2Ljg1LDUzLjQ4LDE1OS4zMyw0OCwxMjgsNDhTNjkuMTUsNTMuNDgsNDguNDIsNjMuODQsMTYsODguNzgsMTYsMTA0djQ4YzAsMTUuMjIsMTEuODIsMjkuODUsMzIuNDIsNDAuMTZTOTYuNjcsMjA4LDEyOCwyMDhzNTguODUtNS40OCw3OS41OC0xNS44NFMyNDAsMTY3LjIyLDI0MCwxNTJWMTA0QzI0MCw4OC43OCwyMjguMTgsNzQuMTUsMjA3LjU4LDYzLjg0Wm0tODcuNTgsOTZ2MzJjLTE5LS42Mi0zNS0zLjQyLTQ4LTcuNDlWMTUzLjA1QTIwMy40MywyMDMuNDMsMCwwLDAsMTIwLDE1OS44NlptMTYsMGEyMDMuNDMsMjAzLjQzLDAsMCwwLDQ4LTYuODF2MzEuMzFjLTEzLDQuMDctMjksNi44Ny00OCw3LjQ5Wk0zMiwxNTJWMTMzLjUzYTgyLjg4LDgyLjg4LDAsMCwwLDE2LjQyLDEwLjYzYzIuNDMsMS4yMSw1LDIuMzUsNy41OCwzLjQzVjE3OEM0MC4xNywxNzAuMTYsMzIsMTYwLjI5LDMyLDE1MlptMTY4LDI2VjE0Ny41OWMyLjYxLTEuMDgsNS4xNS0yLjIyLDcuNTgtMy40M0E4Mi44OCw4Mi44OCwwLDAsMCwyMjQsMTMzLjUzVjE1MkMyMjQsMTYwLjI5LDIxNS44MywxNzAuMTYsMjAwLDE3OFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTA0YzAsMjQtNDAsNDgtMTA0LDQ4UzI0LDEyOCwyNCwxMDQsNjQsNTYsMTI4LDU2LDIzMiw4MCwyMzIsMTA0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwNy41OCw2My44NEMxODYuODUsNTMuNDgsMTU5LjMzLDQ4LDEyOCw0OFM2OS4xNSw1My40OCw0OC40Miw2My44NCwxNiw4OC43OCwxNiwxMDR2NDhjMCwxNS4yMiwxMS44MiwyOS44NSwzMi40Miw0MC4xNlM5Ni42NywyMDgsMTI4LDIwOHM1OC44NS01LjQ4LDc5LjU4LTE1Ljg0UzI0MCwxNjcuMjIsMjQwLDE1MlYxMDRDMjQwLDg4Ljc4LDIyOC4xOCw3NC4xNSwyMDcuNTgsNjMuODRaTTEyOCw2NGM2Mi42NCwwLDk2LDIzLjIzLDk2LDQwcy0zMy4zNiw0MC05Niw0MC05Ni0yMy4yMy05Ni00MFM2NS4zNiw2NCwxMjgsNjRabS04LDk1Ljg2djMyYy0xOS0uNjItMzUtMy40Mi00OC03LjQ5VjE1My4wNUEyMDMuNDMsMjAzLjQzLDAsMCwwLDEyMCwxNTkuODZabTE2LDBhMjAzLjQzLDIwMy40MywwLDAsMCw0OC02LjgxdjMxLjMxYy0xMyw0LjA3LTI5LDYuODctNDgsNy40OVpNMzIsMTUyVjEzMy41M2E4Mi44OCw4Mi44OCwwLDAsMCwxNi40MiwxMC42M2MyLjQzLDEuMjEsNSwyLjM1LDcuNTgsMy40M1YxNzhDNDAuMTcsMTcwLjE2LDMyLDE2MC4yOSwzMiwxNTJabTE2OCwyNlYxNDcuNTljMi42MS0xLjA4LDUuMTUtMi4yMiw3LjU4LTMuNDNBODIuODgsODIuODgsMCwwLDAsMjI0LDEzMy41M1YxNTJDMjI0LDE2MC4yOSwyMTUuODMsMTcwLjE2LDIwMCwxNzhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Coin";
export { I as Coin }
