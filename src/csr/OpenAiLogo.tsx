
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/OpenAiLogo";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuMzIsMTE0LjI0YTU2LDU2LDAsMCwwLTYwLjA3LTc2LjU3QTU2LDU2LDAsMCwwLDY3LjkzLDUxLjQ0YTU2LDU2LDAsMCwwLTM2LjI1LDkwLjMyQTU2LDU2LDAsMCwwLDY5LDIxNyw1Ni4zOSw1Ni4zOSwwLDAsMCw4My41OSwyMTlhNTUuNzUsNTUuNzUsMCwwLDAsOC4xNy0uNjEsNTYsNTYsMCwwLDAsOTYuMzEtMTMuNzgsNTYsNTYsMCwwLDAsMzYuMjUtOTAuMzJaTTE4Mi44NSw1NC40M2E0MCw0MCwwLDAsMSwyOC41Niw0OGMtLjk1LS42My0xLjkxLTEuMjQtMi45MS0xLjgxTDE2NCw3NC44OGE4LDgsMCwwLDAtOCwwbC00NCwyNS40MVY4MS44MWw0MC41LTIzLjM4QTM5Ljc2LDM5Ljc2LDAsMCwxLDE4Mi44NSw1NC40M1pNMTQ0LDEzNy4yNGwtMTYsOS4yNC0xNi05LjI0VjExOC43NmwxNi05LjI0LDE2LDkuMjRaTTgwLDcyYTQwLDQwLDAsMCwxLDY3LjUzLTI5Yy0xLC41MS0yLDEtMywxLjYyTDEwMCw3MC4yN2E4LDgsMCwwLDAtNCw2LjkyVjEyOGwtMTYtOS4yNFpNNDAuODYsODYuOTNBMzkuNzUsMzkuNzUsMCwwLDEsNjQuMTIsNjguNTdDNjQuMDUsNjkuNzEsNjQsNzAuODUsNjQsNzJ2NTEuMzhhOCw4LDAsMCwwLDQsNi45M2w0NCwyNS40TDk2LDE2NSw1NS41LDE0MS41N0E0MCw0MCwwLDAsMSw0MC44Niw4Ni45M1pNNzMuMTUsMjAxLjU3YTQwLDQwLDAsMCwxLTI4LjU2LTQ4Yy45NS42MywxLjkxLDEuMjQsMi45MSwxLjgxTDkyLDE4MS4xMmE4LDgsMCwwLDAsOCwwbDQ0LTI1LjQxdjE4LjQ4bC00MC41LDIzLjM4QTM5Ljc2LDM5Ljc2LDAsMCwxLDczLjE1LDIwMS41N1pNMTc2LDE4NGE0MCw0MCwwLDAsMS02Ny41MiwyOS4wNWMxLS41MSwyLTEuMDUsMy0xLjYzTDE1NiwxODUuNzNhOCw4LDAsMCwwLDQtNi45MlYxMjhsMTYsOS4yNFptMzkuMTQtMTQuOTNhMzkuNzUsMzkuNzUsMCwwLDEtMjMuMjYsMTguMzZjLjA3LTEuMTQuMTItMi4yOC4xMi0zLjQzVjEzMi42MmE4LDgsMCwwLDAtNC02LjkzbC00NC0yNS40LDE2LTkuMjQsNDAuNSwyMy4zOEE0MCw0MCwwLDAsMSwyMTUuMTQsMTY5LjA3WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuNjgsMTE0LjkxQTUyLDUyLDAsMCwwLDE2Mi40OSw0Miw1Miw1MiwwLDAsMCw3MC44Miw1NS4xNWE1Miw1MiwwLDAsMC0zNC41LDg1Ljk0QTUyLDUyLDAsMCwwLDcwLDIxMy4xNiw1Mi4zMyw1Mi4zMywwLDAsMCw4My41OSwyMTVhNTEuNjYsNTEuNjYsMCwwLDAsOS45My0xLDUyLDUyLDAsMCwwLDkxLjY2LTEzLjEzLDUyLDUyLDAsMCwwLDM0LjUtODUuOTRabS0zNS44LTY0LjM0YTQ0LDQ0LDAsMCwxLDI5LjY2LDU4LjM2LDUxLjg0LDUxLjg0LDAsMCwwLTctNC44OUwxNjIsNzguMzVhNCw0LDAsMCwwLTQsMGwtNTAsMjguODdWNzkuNUwxNTAuNSw1NUE0My42OSw0My42OSwwLDAsMSwxODMuODgsNTAuNTdabS0zNS44OCw4OS0yMCwxMS41NC0yMC0xMS41NHYtMjMuMWwyMC0xMS41NCwyMCwxMS41NFpNNzYsNzJhNDQsNDQsMCwwLDEsNzguMjUtMjcuNjJBNTIuMDgsNTIuMDgsMCwwLDAsMTQ2LjUsNDhMMTAyLDczLjczYTQsNCwwLDAsMC0yLDMuNDZ2NTcuNzRMNzYsMTIxLjA3Wk0zNy40LDg0LjkzQTQzLjcyLDQzLjcyLDAsMCwxLDY4LjcxLDYzLjQ2LDUyLjI2LDUyLjI2LDAsMCwwLDY4LDcydjUxLjM4YTQsNCwwLDAsMCwyLDMuNDZsNTAsMjguODdMOTYsMTY5LjU3LDUzLjUsMTQ1QTQ0LDQ0LDAsMCwxLDM3LjQsODQuOTNabTM0LjcyLDEyMC41YTQ0LDQ0LDAsMCwxLTI5LjY2LTU4LjM2LDUxLjg0LDUxLjg0LDAsMCwwLDcsNC44OUw5NCwxNzcuNjVhNCw0LDAsMCwwLDQsMGw1MC0yOC44N1YxNzYuNUwxMDUuNSwyMDFBNDMuNjksNDMuNjksMCwwLDEsNzIuMTIsMjA1LjQzWk0xODAsMTg0YTQ0LDQ0LDAsMCwxLTc4LjI2LDI3LjYxQTUxLjY2LDUxLjY2LDAsMCwwLDEwOS41LDIwOEwxNTQsMTgyLjI3YTQsNCwwLDAsMCwyLTMuNDZWMTIxLjA3bDI0LDEzLjg2Wm0zOC42LTEyLjkzYTQzLjcyLDQzLjcyLDAsMCwxLTMxLjMxLDIxLjQ3QTUyLjI2LDUyLjI2LDAsMCwwLDE4OCwxODRWMTMyLjYyYTQsNCwwLDAsMC0yLTMuNDZsLTUwLTI4Ljg3LDI0LTEzLjg2TDIwMi41LDExMUE0NCw0NCwwLDAsMSwyMTguNiwxNzEuMDdaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTE0LjU2YTU0LDU0LDAsMCwwLTU4LjY3LTc0LjczLDU0LDU0LDAsMCwwLTk0LDEzLjQ2QTU0LDU0LDAsMCwwLDM0LDE0MS40NGE1NCw1NCwwLDAsMCwzNS41Niw3My42NUE1NC41NCw1NC41NCwwLDAsMCw4My41OSwyMTdhNTIuODYsNTIuODYsMCwwLDAsOS4wNi0uNzgsNTQsNTQsMCwwLDAsOTQtMTMuNDZBNTQsNTQsMCwwLDAsMjIyLDExNC41NlpNMTgzLjM3LDUyLjVhNDIsNDIsMCwwLDEsMjkuMjEsNTMuMTQsNTQuODQsNTQuODQsMCwwLDAtNS4wOC0zLjMzTDE2Myw3Ni42MmE2LDYsMCwwLDAtNiwwbC00NywyNy4xM1Y4MC42Nmw0MS41LTI0QTQxLjczLDQxLjczLDAsMCwxLDE4My4zNyw1Mi41Wk0xNDYsMTM4LjM5bC0xOCwxMC4zOS0xOC0xMC4zOVYxMTcuNjFsMTgtMTAuMzksMTgsMTAuMzlaTTc4LDcyYTQyLDQyLDAsMCwxLDcyLjkyLTI4LjQzLDU2LjE4LDU2LjE4LDAsMCwwLTUuNDIsMi43NEwxMDEsNzJhNiw2LDAsMCwwLTMsNS4xOXY1NC4yN0w3OCwxMTkuOTJaTTM5LjEzLDg1LjkzYTQxLjc1LDQxLjc1LDAsMCwxLDI3LjIyLTIwQTU1LjA5LDU1LjA5LDAsMCwwLDY2LDcydjUxLjM4YTYsNiwwLDAsMCwzLDUuMmw0NywyNy4xM0w5NiwxNjcuMjZsLTQxLjUtMjRBNDIsNDIsMCwwLDEsMzkuMTMsODUuOTNaTTcyLjYzLDIwMy41YTQyLDQyLDAsMCwxLTI5LjIxLTUzLjE0LDU0Ljg0LDU0Ljg0LDAsMCwwLDUuMDgsMy4zM0w5MywxNzkuMzhhNiw2LDAsMCwwLDYsMGw0Ny0yNy4xM3YyMy4wOWwtNDEuNSwyNEE0MS43Myw0MS43MywwLDAsMSw3Mi42MywyMDMuNVpNMTc4LDE4NGE0Miw0MiwwLDAsMS03Mi45MiwyOC40Myw1Ni4xOCw1Ni4xOCwwLDAsMCw1LjQyLTIuNzRMMTU1LDE4NGE2LDYsMCwwLDAsMy01LjE5VjEyNC41NGwyMCwxMS41NFptMzguODctMTMuOTNhNDEuNzUsNDEuNzUsMCwwLDEtMjcuMjIsMjBBNTUuMDksNTUuMDksMCwwLDAsMTkwLDE4NFYxMzIuNjJhNiw2LDAsMCwwLTMtNS4ybC00Ny0yNy4xMywyMC0xMS41NSw0MS41LDI0QTQyLDQyLDAsMCwxLDIxNi44NywxNzAuMDdaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguODgsMTEzLjYxQTYwLDYwLDAsMCwwLDE2NiwzMy40Miw2MCw2MCwwLDAsMCw2NS4xLDQ3LjgzYTYwLDYwLDAsMCwwLTM4LDk0LjU2QTYwLjA4LDYwLjA4LDAsMCwwLDgzLjYsMjIzYTU3LjgzLDU3LjgzLDAsMCwwLDYuNDUtLjM2QTYwLDYwLDAsMCwwLDE5MC45LDIwOC4xN2E2MCw2MCwwLDAsMCwzOC05NC41NlpNMTgxLjgxLDU4LjNhMzYsMzYsMCwwLDEsMjYuNTgsMzcuNkwxNzAsNzMuNzNhMTIsMTIsMCwwLDAtMTIsMEwxMjAsOTUuNjdWODEuODFMMTU0LjUsNjEuOUEzNS43NCwzNS43NCwwLDAsMSwxODEuODEsNTguM1pNMTM2LDEyMy4zOHY5LjI0bC04LDQuNjItOC00LjYydi05LjI0bDgtNC42MlpNODQsNzJhMzYsMzYsMCwwLDEsNTYuMzktMjkuNjdMMTAyLDY0LjQ5YTEyLDEyLDAsMCwwLTYsMTAuMzl2NDMuODhsLTEyLTYuOTNaTTQ0LjMzLDg4LjkzQTM1LjgxLDM1LjgxLDAsMCwxLDYwLDc0LjQzdjQ0LjMzYTEyLDEyLDAsMCwwLDYsMTAuNGwzOCwyMS45M0w5MiwxNTgsNTcuNSwxMzguMUEzNiwzNiwwLDAsMSw0NC4zMyw4OC45M1pNNzQuMTksMTk3LjdhMzYsMzYsMCwwLDEtMjYuNTgtMzcuNkw4NiwxODIuMjdhMTIsMTIsMCwwLDAsMTIsMGwzOC0yMS45NHYxMy44NkwxMDEuNSwxOTQuMUEzNS43NCwzNS43NCwwLDAsMSw3NC4xOSwxOTcuN1pNMTcyLDE4NGEzNiwzNiwwLDAsMS01Ni4zOSwyOS42N0wxNTQsMTkxLjUxYTEyLDEyLDAsMCwwLDYtMTAuMzlWMTM3LjI0bDEyLDYuOTNabTM5LjY3LTE2LjkzQTM1LjgxLDM1LjgxLDAsMCwxLDE5NiwxODEuNTdWMTM3LjI0YTEyLDEyLDAsMCwwLTYtMTAuNGwtMzgtMjEuOTNMMTY0LDk4bDM0LjUsMTkuOTJBMzYsMzYsMCwwLDEsMjExLjY3LDE2Ny4wN1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuMzIsMTE0LjI0YTU2LDU2LDAsMCwwLTYwLjA3LTc2LjU3QTU2LDU2LDAsMCwwLDY3LjkzLDUxLjQ0YTU2LDU2LDAsMCwwLTM2LjI1LDkwLjMyQTU2LDU2LDAsMCwwLDY5LDIxNyw1Ni4zOSw1Ni4zOSwwLDAsMCw4My41OSwyMTlhNTUuNzUsNTUuNzUsMCwwLDAsOC4xNy0uNjEsNTYsNTYsMCwwLDAsOTYuMzEtMTMuNzgsNTYsNTYsMCwwLDAsMzYuMjUtOTAuMzJabS04MC4zMiwyMy0xNiw5LjI0LTE2LTkuMjRWMTE4Ljc2bDE2LTkuMjQsMTYsOS4yNFptMzguODUtODIuODFhNDAsNDAsMCwwLDEsMjguNTYsNDhjLS45NS0uNjMtMS45MS0xLjI0LTIuOTEtMS44MUwxNjQsNzQuODhhOCw4LDAsMCwwLTgsMGwtNDQsMjUuNDFWODEuODFsNDAuNS0yMy4zOEEzOS43NiwzOS43NiwwLDAsMSwxODIuODUsNTQuNDNabS0xNDIsMzIuNUEzOS43NSwzOS43NSwwLDAsMSw2NC4xMiw2OC41N0M2NC4wNSw2OS43MSw2NCw3MC44NSw2NCw3MnY1MS4zOGE4LDgsMCwwLDAsNCw2LjkzbDQ0LDI1LjRMOTYsMTY1LDU1LjUsMTQxLjU3QTQwLDQwLDAsMCwxLDQwLjg2LDg2LjkzWk0xMzYsMjI0YTM5Ljc5LDM5Ljc5LDAsMCwxLTI3LjUyLTEwLjk1YzEtLjUxLDItMS4wNSwzLTEuNjNMMTU2LDE4NS43M2E4LDgsMCwwLDAsNC02LjkyVjEyOGwxNiw5LjI0VjE4NEE0MCw0MCwwLDAsMSwxMzYsMjI0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxNzQuMTlsNTYtMzIuMzN2MzYuOTVMMTA3LjUsMjA0LjVhNDgsNDgsMCwwLDEtNjYuNC02NC4wOGgwQTQ4LDQ4LDAsMCwwLDUxLjUsMTQ4LjVaTTIwNC41LDEwNy41LDE2MCw4MS44MWwtMzIsMTguNDgsNTYsMzIuMzNWMTg0YTQ4LDQ4LDAsMCwxLTEuODEsMTNoMEE0OCw0OCwwLDAsMCwyMDQuNSwxMDcuNVpNMTA0LDc3LjE5LDE0OC41LDUxLjVhNDcuNzcsNDcuNzcsMCwwLDEsMTIuMTktNXYwQTQ4LDQ4LDAsMCwwLDcyLDcydjUxLjM4bDMyLDE4LjQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNC4zMiwxMTQuMjRhNTYsNTYsMCwwLDAtNjAuMDctNzYuNTdBNTYsNTYsMCwwLDAsNjcuOTMsNTEuNDRhNTYsNTYsMCwwLDAtMzYuMjUsOTAuMzJBNTYsNTYsMCwwLDAsNjksMjE3LDU2LjM5LDU2LjM5LDAsMCwwLDgzLjU5LDIxOWE1NS43NSw1NS43NSwwLDAsMCw4LjE3LS42MSw1Niw1NiwwLDAsMCw5Ni4zMS0xMy43OCw1Niw1NiwwLDAsMCwzNi4yNS05MC4zMlpNMTgyLjg1LDU0LjQzYTQwLDQwLDAsMCwxLDI4LjU2LDQ4Yy0uOTUtLjYzLTEuOTEtMS4yNC0yLjkxLTEuODFMMTY0LDc0Ljg4YTgsOCwwLDAsMC04LDBsLTQ0LDI1LjQxVjgxLjgxbDQwLjUtMjMuMzhBMzkuNzYsMzkuNzYsMCwwLDEsMTgyLjg1LDU0LjQzWk0xNDQsMTM3LjI0bC0xNiw5LjI0LTE2LTkuMjRWMTE4Ljc2bDE2LTkuMjQsMTYsOS4yNFpNODAsNzJhNDAsNDAsMCwwLDEsNjcuNTMtMjljLTEsLjUxLTIsMS0zLDEuNjJMMTAwLDcwLjI3YTgsOCwwLDAsMC00LDYuOTJWMTI4bC0xNi05LjI0Wk00MC44Niw4Ni45M0EzOS43NSwzOS43NSwwLDAsMSw2NC4xMiw2OC41N0M2NC4wNSw2OS43MSw2NCw3MC44NSw2NCw3MnY1MS4zOGE4LDgsMCwwLDAsNCw2LjkzbDQ0LDI1LjRMOTYsMTY1LDU1LjUsMTQxLjU3QTQwLDQwLDAsMCwxLDQwLjg2LDg2LjkzWk03My4xNSwyMDEuNTdhNDAsNDAsMCwwLDEtMjguNTYtNDhjLjk1LjYzLDEuOTEsMS4yNCwyLjkxLDEuODFMOTIsMTgxLjEyYTgsOCwwLDAsMCw4LDBsNDQtMjUuNDF2MTguNDhsLTQwLjUsMjMuMzhBMzkuNzYsMzkuNzYsMCwwLDEsNzMuMTUsMjAxLjU3Wk0xNzYsMTg0YTQwLDQwLDAsMCwxLTY3LjUyLDI5LjA1YzEtLjUxLDItMS4wNSwzLTEuNjNMMTU2LDE4NS43M2E4LDgsMCwwLDAsNC02LjkyVjEyOGwxNiw5LjI0Wm0zOS4xNC0xNC45M2EzOS43NSwzOS43NSwwLDAsMS0yMy4yNiwxOC4zNmMuMDctMS4xNC4xMi0yLjI4LjEyLTMuNDNWMTMyLjYyYTgsOCwwLDAsMC00LTYuOTNsLTQ0LTI1LjQsMTYtOS4yNCw0MC41LDIzLjM4QTQwLDQwLDAsMCwxLDIxNS4xNCwxNjkuMDdaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "OpenAiLogo";
export { I as OpenAiLogo }
