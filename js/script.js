// IPO - input process output 

//Constants and Variables
let skills;

// Cached element references
const $button = $('button');
const $ul = $('ul');
const $input = $('input')


//Event listeners
$button.on('click', handleAddSkill);
$ul.on('click', handleDelete);

//Functions
init();

function init() {
    skills = [];
    render();
}

function handleAddSkill() {
    // store the value from the imput tag inside a local variable
    const skill = $input.val()
    //check to make sure we have skill data;
    if (skill) {
        //create the UI for a skill
        const $skill = $(`<li class='remove'><span>X</span>${skill}</li>`)
        //push skill UI into the skills list
        skills.push($skill);
        //clear the input tag's value
        $input.val('');
        //render()
        render()
    } else return;

//1.47.56
}

function handleDelete() {
    $ul.on('click', '.remove', function() {
        $(this).closest('li').remove();
        
          
      });
        

 }
   



function render() {
    //to take the list of skills in the skills array and add them to the ul tag
    if (!skills.length) $ul.css('margin-bottom', '30px');
    else $ul.css('margin-bottom', '0px')
    $ul.html(skills);
}