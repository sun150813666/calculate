// 计算顶角
function calculateVertexAngle() {
    const vertexAngles = [];

    // 提取前五组顶角数据
    for (let i = 1; i <= 5; i++) {
        const thetaLeft1 = parseFloat(document.getElementsByName(`data${i}1`)[0].value);
        const thetaLeft2 = parseFloat(document.getElementsByName(`data${i}3`)[0].value);
        const thetaRight1 = parseFloat(document.getElementsByName(`data${i}2`)[0].value);
        const thetaRight2 = parseFloat(document.getElementsByName(`data${i}4`)[0].value);

        if (!isNaN(thetaLeft1) && !isNaN(thetaLeft2) && !isNaN(thetaRight1) && !isNaN(thetaRight2)) {
            const vertexAngle = Math.abs(0.25 * ((thetaLeft1 - thetaLeft2) + (thetaRight1 - thetaRight2)));
            vertexAngles.push(vertexAngle);
        }
    }

    // 计算顶角的平均值
    if (vertexAngles.length > 0) {
        const averageVertexAngle = vertexAngles.reduce((sum, angle) => sum + angle, 0) / vertexAngles.length;
        document.getElementById('A').textContent = averageVertexAngle.toFixed(2);
    } else {
        document.getElementById('A').textContent = 'N/A';
    }
}

// 计算偏向角
function calculateDeviationAngle() {
    const deviationAngles = [];

    // 提取后五组偏向角数据
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        const leftGame1 = parseFloat(document.getElementsByName(`data${i}10`)[0].value);
        const leftGame2 = parseFloat(document.getElementsByName(`data${i}30`)[0].value);
        const rightGame1 = parseFloat(document.getElementsByName(`data${i}20`)[0].value);
        const rightGame2 = parseFloat(document.getElementsByName(`data${i}40`)[0].value);

        if (!isNaN(leftGame1) && !isNaN(leftGame2) && !isNaN(rightGame1) && !isNaN(rightGame2)) {
            const deviationAngle = Math.abs(0.25 * ((leftGame1 - leftGame2) + (rightGame1 - rightGame2)));
            deviationAngles.push(deviationAngle);
        }
    }

    // 计算偏向角的平均值
    if (deviationAngles.length > 0) {
        const averageDeviationAngle = deviationAngles.reduce((sum, angle) => sum + angle, 0) / deviationAngles.length;
        document.getElementById('B').textContent = averageDeviationAngle.toFixed(2);
    } else {
        document.getElementById('B').textContent = 'N/A';
    }
}

// 计算折射率n
function calculateRefractiveIndex() {
    const inputTopAngle = parseFloat(document.getElementById('inputTopAngle').value);
    const inputMinDeviationAngle = parseFloat(document.getElementById('inputMinDeviationAngle').value);

    if (!isNaN(inputTopAngle) && !isNaN(inputMinDeviationAngle)) {
        const n = Math.sin(0.5 * (inputMinDeviationAngle) + parseFloat(inputTopAngle))/ Math.sin(0.5 * inputTopAngle);
        document.getElementById('resultN').textContent = n.toFixed(2);
    } else {
        alert('请输入有效的数字！');
    }
}

//点击事件
function all_count(){
    calculateVertexAngle();
    calculateDeviationAngle();
    calculateRefractiveIndex();
}


function tapclear(){
    let input_arr = document.getElementsByTagName('input');
    console.log(input_arr)
    for (let i=0; i<input_arr.length; i++){
        input_arr[i].value = '';
    }
}