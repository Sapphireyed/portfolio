import '../style.scss'
import './about.scss'
import { nav } from '../nav/nav.js'
import mainGame from './main.js'
import { displaySkills } from './displaySkills.js'
 
window.addEventListener('load', mainGame)
window.addEventListener('load', function () {
    document.querySelectorAll('#navContainer nav #nav a')[1].style.color = 'white'
})

window.addEventListener('load', function () {
    let storyParts = Array.from(document.getElementsByClassName('story'))
    let yes = Array.from(document.getElementsByClassName('yes'))
    let no = Array.from(document.getElementsByClassName('no'))
  //  let skip = Array.from(document.getElementsByClassName('skip'))

    yes.map((y, i) => {
        y.addEventListener('click', function () {
            storyParts[i].style.display = 'none'
            storyParts[i + 1].style.display = 'block'
            if (storyParts[i + 1].id == 'front-end') {
                document.getElementById('canvas1').style.opacity = 0
                document.getElementById('replay').style.opacity = 0
                document.getElementById('skills').style.display = 'block'
                displaySkills()
            }
            window.pageYOffset = 0
        })

    })
    no.map((n,i) => {
        n.addEventListener('click', function () {
            storyParts[i].style.display = 'none';
            document.getElementById('front-end').style.display = 'block'
            document.getElementById('canvas1').style.opacity = 0
            document.getElementById('replay').style.opacity = 0
            document.getElementById('skills').style.display = 'block'
            displaySkills()
            window.pageYOffset = 0
        })
    })
})

document.body.innerHTML = '<section><div id="story">' +
        '<div class="story" id="gamer">' +
        '<div class="heading"><h1>I\'m a <span class="blue">Gamer</span></h1><!--<img src="img/dice.png" />--></div>' +

            '<p>' +
                'So I wouldn\'t be <span class="blue">myself</span> if I didn\'t try to create at least a very simple game. <br />' +
                'In pure JavaScript with no game engines, it was a very <span class="blue">fun</span> experiment.' +
            '</p>' +
            '<p>' +
                'Isn\'t it <span class="blue">beautiful</span> about programming that you can create so many different things, things you love? <br />' +
            '</p>' +
            '<p>' +
                'And I <em>love</em> games.<br />' +
            '</p>' +
            '<p>' +
                'Also, beutiful  websites, user-friendly web aplications, <span class="blue">creative</span> coding, generative art, all front-end technologies. <br />' +
                'And so many other things.' +
            '</p>' +
            '<p>' +
                'But...<br />' +
                'It isn\'t <em>really</em> what you came here for, is it?' +

            '</p>' +


        '<div class="btns">' +
            '<button id="yes" class="yes">It is!</button>' +
            '<button id="no" class="no">Not really</button>' +
        '</div>' +


    '</div>' +
    '<div class="story" id="gamerPart2">' +
        '<div class="heading"><h1>I\'m a <span class="blue">Gamer</span><small> part 2</small></h1><!--<img src="img/dice.png" />--></div>' +
        '<p>' +
            'It is? You\'re so <span class="blue">kind</span>!' +
        '</p>' +
        '<p>' +
            'So, where was I?' +
        '</p>' +
        '<p>' +
            'Games. Yes, I <span class="blue">certainly</span> love games - board games, video games, card, strategy, roguelike, rpg, cooperative - all kinds of games! <br />' +
        '</p>' +
        '<p>' +
            'Some of the games I play have an active and friendly community and I\'m a proud member of these, also a <span class="blue">moderator</span> on couple of discord games servers' +
        '</p>' +
        '<p>' +
            'And I <span class="blue">obviously</span> created websites for some of them. Check out my <a href="work/work.html">Work</a> section!' +
        '</p>' +
        '<p>' +
            'If you want to share a title you think I might enjoy, don\'t hesitate. Always good to learn about <span class="blue">new</span> games!<br />' +
        '</p>' +
        '<p>' +
            'Shall I talk about the web development now ?' +
        '</p>' +


        '<div class="btns">' +
            '<button id="yes" class="yes">No, tell memore about yourself</button>' +
            '<button id="no" class="no">Yes, please</button>' +
        '</div>' +
    '</div>' +

    '<div class="story" id="metalhead">' +
        '<div class="heading"><h1>I\'m a <span class="blue">Metalhead</span></h1><!--<img src="img/dice.png" />--></div>' +
        '<p>' +
            'Not by the look though. But deep in my <span class="blue">heart</span> lives metal, and it accompanies me in happy days and in my sorrows.' +
        '</p>' +
        '<p>' +
        '   I listen to music for relax, in the car, while working (if possible). While playing games too, obviously. Everywhere. Anytime.' +
        '</p>' +
        '<p>' +
            'And it\'s <span class="blue">never</span> enough.' +
        '</p>' +
        '<p>' +
            'I have a pretty nice <span class="blue">collection</span> of CDs, but currently I listen to them rarely. Because there\'s Spotify.' +
        '</p>' +
        '<p>' +
            'But it still looks <span class="blue">cool</span>!' +
        '</p>' +
        '<p>' +

        '</p>' +


        '<div class="btns">' +
            '<button id="yes" class="yes">More...</button>' +
            '<button id="no" class="no">So, you\'re a front-end developer, right?</button>' +
        ' </div>' +
    '</div>' +

    '<div class="story" id="bookworm">' +
        '<div class="heading"><h1>I\'m a <span class="blue">Book worm</span></h1><!--<img src="img/dice.png" />--></div>' +
        '<p>' +
            'Always have been. As a child I never complained about the length of a book. The on;y thing that matters is - it is good.' +
        '</p>' +
        '<p>' +
            'If it is, let it have 1000 pages, I\'ll happily read.' +
        '</p>' +
        '<p>' +
            'If it\'s good - the loner, the better. I get to like and dislike particular characters and don\'t want them to go away too soon.' +
        '</p>' +
        '<p>' +
            'I dreamed abot being a writer, years ago. But it\'s not for me. I found a different hobby that givesme more joy that writing ever could.' +
        '</p>' +
        '<p>' +
            'I bet you already know what.' +
        '</p>' +
        '<p>' +

        '</p>' +


        '<div class="btns">' +
            '<button id="yes" class="yes">Ok, I can see you really want to tell me about you as a web developer</button>' +
        '<!--<button id="no" class="no">So, you\'re a front-end developer, right?</button>' +
            '<button id="skip" class="skip">Skip</button>-->' +
        '</div>' +
    '</div>' +

    '<div class="story" id="front-end">' +
        '<div class="heading"><h1>I\'m a <span class="blue">Web developer</span></h1><!--<img src="img/dice.png" />--></div>' +
            '<p>' +
                'Here we are, that\'s who I <span class="blue">am</span>. That\'s what my biggest hobby is.' +
            '</p>' +
            '<p>' +
            'Every developer says they love their job and you know what? ' +
            'I do believe they all do.' +
            '</p>' +
            '<p>' +
                'I mean - programming is really cool. It makes me feel so good to create things by just writing a code.' +
            'It\'s like <span class="blue">magic</span>, you turn words into real, beautiful things.' +
            '</p>' +
            '<p>' +
                'I am really very, very <span class="blue">passionate</span> about this. In the end I did decide to switch to it which was a big change in my life and makes everyone surprised' +
            '</p>' +
            '<p>' +
                '\'You could have been a lawyer, you did graduate law, the path was open, <span class="blue">why</span>?\'' +
            '</p>' +
            '<p>' +
                'I can\'t really explain this, I simply love <span class="blue">this</span> and <span class="blue">this</span> is what I want to do.' +
            '</p>' +
            '<p>' +
            'So, do you need a website? ' +
            'Do you seek a creative, open-minded front-end developer to join your team? <br />' +
                '<span class="blue">Contact me</span>' +

            '</p>' +


        '<div class="skills">' +
            '<!--<button id="yes" class="yes">More...</button>' +
            '<button id="no" class="no">So, you\'re a front-end developer, right?</button>' +
            '<button id="skip" class="skip">Skip</button>-->' +
        '</div>' +
    '</div>' +
'</div>' +
'</section >' +

'<canvas id="skills" class="canvasOnRight"></canvas>'+
'<canvas id="canvas1" class="canvasOnRight" style="position:absolute"></canvas>' +
    '<h1 id="replay">Replay</h1>'

document.body.prepend(nav)