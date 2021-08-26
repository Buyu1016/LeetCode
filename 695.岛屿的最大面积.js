/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(g) {
    let max = 0
    // 地图的宽度
    const w = g[0].length
    // 地图的高度
    const h = g.length
    // 判定特殊情况
    if ((g.flat()).indexOf(1) < 0) { // 说明当前地图上并没有陆地
        return max
    } else { // 说明当前地图上有岛屿的存在
        // 判断岛屿的最大面积
        // BFS
        // for(let i = 0; i < w; i++) {
        //     for(let j = 0; j < h; j++) {
        //         if(g[j][i]) { // 当前位置为岛屿
        //             // 进行广度优先搜索
        //             const a = [[j,i]]
        //             let z = 0
        //             while (a.length) {
        //                 const [x,y] = a.pop()
        //                 if (g[x][y] === 1) { // 把已经记录过的岛屿变为海水
        //                     g[x][y] = 0
        //                     z++
        //                 } else {
        //                     continue
        //                 }
        //                 if (x > 0) a.push([x-1,y]) // 上
        //                 if (x < h-1) a.push([x+1,y]) // 下
        //                 if (y > 0) a.push([x, y-1])// 左
        //                 if (y < w-1) a.push([x, y+1])// 右
        //             }
        //             max = Math.max(max,z)
        //         }
        //     }
        // }
        
        // DFS
        for(let i = 0; i < w; i++) {
            for(let j = 0; j < h; j++) {
                if(g[j][i]) { // 当前位置为岛屿
                    // 进行深度优先搜索
                    function dfs(x,y) {
                        if (x<0 || y<0 || x>=h || y>=w || g[x][y]==0) return 0
                        let z = 1
                        // 走过的岛屿变为海水
                        g[x][y] = 0
                        z += dfs(x-1,y)// 上
                        z += dfs(x+1,y)// 下
                        z += dfs(x,y-1)// 左
                        z += dfs(x,y+1)// 右
                        return z
                    }
                    max = Math.max(max,dfs(j,i))
                }
            }
        }
    }
    return max
};
// @lc code=end
