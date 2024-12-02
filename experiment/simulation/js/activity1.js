let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Double Integration Simposon's (3/8th) Rule</h5>
        <p>Learning Objective: Learn to generate the data for continous</p>
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
    let btn_text = get_collapse_btn_text("Select n and m values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-size: 25px;'>
                $$I \\ = \\  \\int_{y_1}^{y_2} \\int_{x_1}^{x_2} e^{(x + y)} \\ dx \\ dy $$
            </span></p>
            <br><br>
            <div style='text-align: center;' class='row'>
                <div class='col-md-6'>
                    <p>Choose number of divisions in x direction (n)</p>
                    <select class='form-select' id='sel-n'>
                        <option value='' default>--select--</option>
                        <option value='1' default>1</option>
                        <option value='2' default>2</option>
                    </select>
                    <div id='dsp-n'></div>
                </div>

                <div class='col-md-6'>
                    <p>Choose number of divisions in y direction (m)</p>
                    <select class='form-select' id='sel-m'>
                        <option value='' default>--select--</option>
                        <option value='1' default>1</option>
                        <option value='2' default>2</option>
                    </select>
                    <div id='dsp-m'></div>
                </div>
            </div>

            <br><br>

            <div><button class='btn btn-info' id='sel-nm-btn' onclick='select_mn();'>Select</button></div>
        </div>
        <br><br>

        <div style='text-align: center;'><button class='btn btn-info' id='temp-btn-12' onclick='start_act1_p2();' style='display: none;' >Next</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function select_mn() {
    let nd = document.getElementById('sel-n');
    let md = document.getElementById('sel-m');
    let dspn = document.getElementById('dsp-n');
    let dspm = document.getElementById('dsp-m');
    if (nd.value == '') {
        alert('select valid n value');
        return;
    }
    if (md.value == '') {
        alert('select valid m value');
        return;
    }
    n = parseInt(nd.value);
    m = parseInt(md.value);
    nd.remove();
    md.remove();
    dspn.innerText = `n = ${n}`;
    dspm.innerText = `m = ${m}`;
    let btn = document.getElementById('sel-nm-btn');
    let n_btn = document.getElementById('temp-btn-12');
    btn.remove();
    n_btn.style.display = 'block';
    //assigning x1, x2, y1 and y2 values
    // x1 = n;
    // x2 = n+1;
    // y1 = m;
    // y2 = m+1;
    //calculate hx and hy
    hx = 1.5 / (3 * n);
    hy = 1.5 / (3 * m);
}
//for starting first activity second part
function start_act1_p2() {
    let temp_btn = document.getElementById('temp-btn-12');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate hx and hy", "tb12-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb12-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-size: 25px;'>
                $$n = ${n} \\ \\ \\ m = ${m}$$
            </span></p>

            <p style='text-align: center;'><span style='font-size: 25px;'>
            $$ x_1 = ${x1} \\ \\ \\ x_2 = ${x2} $$
            </span></p>

            <p style='text-align: center;'><span style='font-size: 25px;'>
            $$y_1  = ${y1} \\ \\ \\ y_2 = ${y2}$$
            </span></p>
            <br><br>
            <div style='text-align: center;' class='row'>
                
                <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>$$ h_x = \\frac{x_2 - x_1}{3n} \\ = \\ $$</span> <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='hx-inp' > <span id='hx-val-sp'></span></div>

                <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>$$ h_y = \\frac{y_2 - y_1}{3m} \\ = \\ $$</span><input type='number' class='form-control' style='display: inline !important; width: 100px;' id='hy-inp' > <span id='hy-val-sp'></span></div>
            </div>

            <br><br>

            <div><button class='btn btn-info' id='a1-ver-btn' onclick='verify_hx_hy();'>verify</button></div>
        </div>
        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb12-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_hx_hy() {
    let btn = document.getElementById('a1-ver-btn');
    console.log(`hx => ${hx}`);
    let inp = document.getElementById('hx-inp');
    let sp = document.getElementById('hx-val-sp');
    console.log(`hy => ${hy}`);
    let inp1 = document.getElementById('hy-inp');
    let sp1 = document.getElementById('hy-val-sp');
    if (!verify_values(parseFloat(inp.value), hx)) {
        alert('hx value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), hy)) {
        alert('hy value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${hx.toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${hy.toFixed(4)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map