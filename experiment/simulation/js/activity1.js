let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Differentiation Method Based on Finite Difference</h5>
        <p>Learning Objective: Find forward difference, central deiffrence and backward difference</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate forward, central and backward values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div id='a1-tab' ></div>


        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ h = x_1 - x_0 = x_2 - x_1  \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='h-inp' > <span id='h-val-sp'></span></div>

        <br>

        <p style='text-align: center; font-size: 18px;'>Forward Differentiation <span style='display: inline-block;' >$$ f'(x) = \\frac{f(x+h) - f(x)}{h} $$</span></p>
        <div style='text-align: center;'>Forward Differentiation for <span style='font-size: 18px; display: inline-block;'>$$ f'(${X[0]}) \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f1f-inp' > <span id='f1f-val-sp'></span></div>

        <br>

        <p style='text-align: center; font-size: 18px;'>Central Differentiation <span style='display: inline-block;' >$$ f'(x) = \\frac{f(x+h) - f(x-h)}{2h} $$</span></p>
        <div style='text-align: center;'>Central Differentiation for <span style='font-size: 18px; display: inline-block;'>$$ f'(${X[1]}) \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f1c-inp' > <span id='f1c-val-sp'></span></div>

        <br>

        <p style='text-align: center; font-size: 18px;'>Backward Differentiation <span style='display: inline-block;' >$$ f'(x) = \\frac{f(x) - f(x-h)}{h} $$</span></p>
        <div style='text-align: center;'>Backward Differentiation for <span style='font-size: 18px; display: inline-block;'>$$ f'(${X[2]}) \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f1b-inp' > <span id='f1b-val-sp'></span></div>

        <br>

        
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    show_xy();
    internal_calculations0();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations0() {
    f1f = (Y[1] - Y[0]) / h;
    f1c = (Y[2] - Y[0]) / (2 * h);
    f1b = (Y[2] - Y[1]) / h;
}
function show_xy() {
    let div = document.getElementById('a1-tab');
    let header = ['x'];
    tb_data = [['f(x)']];
    for (let i = 0; i < 3; i++) {
        header.push(`${X[i]}`);
        tb_data[0].push(`${Y[i]}`);
    }
    let tb = new Display_Table(header, tb_data, div);
    tb.load_table();
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`h => ${h}, forward => ${f1f}, central => ${f1c}, backward => ${f1b}`);
    let inp0 = document.getElementById('h-inp');
    let sp0 = document.getElementById('h-val-sp');
    let inp = document.getElementById('f1f-inp');
    let sp = document.getElementById('f1f-val-sp');
    let inp1 = document.getElementById('f1c-inp');
    let sp1 = document.getElementById('f1c-val-sp');
    let inp2 = document.getElementById('f1b-inp');
    let sp2 = document.getElementById('f1b-val-sp');
    if (!verify_values(parseFloat(inp0.value), h)) {
        alert('h value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp.value), f1f)) {
        alert('Forward differentiation value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), f1c)) {
        alert('Central differentiation value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), f1b)) {
        alert('Backward differentiation value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp0.remove();
    sp0.innerText = `${h.toFixed(2)}`;
    inp.remove();
    sp.innerText = `${f1f.toFixed(3)}`;
    inp1.remove();
    sp1.innerText = `${f1c.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${f1b.toFixed(3)}`;
    alert('Your entered values are correct!!');
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map