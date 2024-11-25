function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find f''(${X[1]})</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate f''(x)", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

    <p style='text-align: center; font-size: 18px;'>Central Differentiation <span style='display: inline-block;' >$$ f''(x) = \\frac{f(x+h) - 2f(x) + f(x-h)}{h^2} $$</span></p>
    
        <div style='text-align: center;'>Forward Differentiation for <span style='font-size: 18px; display: inline-block;'>$$ f''(${X[1]}) \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='f2c-inp' > <span id='f2c-val-sp'></span></div>
    
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-20' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    internal_calculations1();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    f2c = (Y[2] - 2 * Y[1] + Y[0]) / (Math.pow(h, 2));
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-20');
    console.log(`l0 => ${f2c}`);
    let inp = document.getElementById('f2c-inp');
    let sp = document.getElementById('f2c-val-sp');
    if (!verify_values(parseFloat(inp.value), f2c)) {
        alert('Central differentiation value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${f2c.toFixed(2)}`;
    alert('Your entered values are correct!!');
}
//# sourceMappingURL=activity2.js.map