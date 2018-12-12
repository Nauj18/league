import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity  } from 'react-native';

class patch extends React.Component {
    static navigationOptions = {
        title: 'Patch Notes',
      };

    render() {
        const { navigate } = this.props.navigation;

        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            
            <Text style={styles.textStyle}>As a heavy duty Singed player, I have 2 main complaints:

He is supposed to be a strong speed tank. But doesn't have 330 speed. Plus he is the most fragile tank IN THE GAME. He is more durable than only Vladimir after adding his buff in (and still 2nd squishiest).

Level 1 HP 550+: (These are the beefy tanks)
Alistar: 468 + 114
Amumu: 472 + 84
Blitzcrank: 468 + 100
Chogath: 470 + 80
Mundo: 468 + 92
Garen: 455 + 96
Sion: 473 + 104

Level 1 HP 500-549: (These are the average tanks)
Malphite: 423 + 82
Mordekaiser: 421 + 80
Nasus: 410 + 90
Nunu: 437 + 108
Shen: 428 + 85

Level 1 HP under 500: (These are the squishy tanks)
Galio: 410 + 85
Gragas: 404 + 89
Singed: 351 + 78
Singed (with passive): 404.75 + 89.25
Vladimir: 400 + 85

Everyone from list 1, plus Nunu and Nasus all scale well with hp/level (90+/level).
Singed without his passive is more fragile than ANY other champion in the game. It's as if his passive is meant to compensate for his bad stats instead of actually buff him.
TL;DRp1: Singed is ****ing squishy. Before his passive, even Twitch is tougher (5 more hp at level 1, and same hp/level).

Contrast with Vladimir:
Vladimir's AP-> part of his passive (not his entire passive) increases the value gained off AP by 24.27%.
(Based on a 435g tome providing an extra 40 hp. 40 hp is 22.2% of a Ruby Crystal, or 105.5g. This is a 24.27% value increase).
Singed's entire passive increases the value gained from mana by
(Based on a 400g sapphire providing an extra 50 hp. 50 hp is 27.7% of a Ruby Crystal, or 131.94g. This is a 32.9% increase in value.)
Mana alone generally isn't a useful stat to stack (getting more than one mana item is usually excessive - and a Singed with RoA never really has mana woes). AP however directly increases Vlad's damage, and can be freely stacked to your heart's content. Vlad also gets a secondary effect to his passive
Now, it's not fair to compare the two champions completely side by side, as they do fill different roles even if they both have somewhat similar passives and the tank tag. However, without looking at QWER (which Singed really doesn't excel with outside his Q doing good damage over time, and I'd say Vlad has the better skillset), Singed doesn't feel like he has much going for him. Counting skills, Singed really only has his poison and fling. The goo primarily serves to set up a fling, and his ultimate gives him health back and help set up his fling (see the pattern here?).
TL;DRp2: Singed just can't compare favorably without his passive, and even then, Vladimir demonstrates a much stronger passive without having worse survival or skillsets (also, not having to get a mana item to manage skills).

What Singed needs to fill his role better, and reasoning:
1) Singed needs to EITHER have a better CC mechanism OR be reasonably beefy for a tank. If the latter, his passive should take him up into the first tier of tanks for health (550+ level 1 hp). Since reworking his skills would take a lot more work, the latter option is far simpler. Giving him +50 base health and +5/level would make him the 9th toughest tank at level 1, and 7th toughest at level 18. All before gear.

2) An actual utility feature or damage to his slow. It is incredibly mana intensive for JUST providing a slow. Similar skills:

    Singed's Mega-adhesive: 80/90/100/110/120 mana for a 35/45/55/65/75% slow that breaks the moment they leave the area. Lasts 5 seconds.
    Miss Fortune's Make It Rain: 80/85/90/95/100 mana for 95/155/210/275/335 (+.8) damage and a 20/25/30/35/40% slow that persists 1.5 seconds after being hit (slow lasts 3.5 seconds for anyone caught in it the entire 2 seconds of damage).
    Galio's Resolute Smite: 60/65/70/75/80 mana for 60/115/170/225/280 (+.6) damage and a 24/28/32/36/40% slow for 2.5 seconds.
    Cho'gath's Rupture: 80/90/100/110/120 mana for 80/135/190/245/300 (+1) damage and a 60% slow for 3 seconds.

Singed just comes out of this looking terrible. It isn't even until rank 3-4 that his goo shines at all as a slow compared to the other champions (Cho gets a 60% slow at rank 1 for the same mana). And even then it deals 0 damage. If it had a DoT component while in it (acidic goop. he could even harvest it from Kog'Maw) that did say 13/21/29/37/45 (+.15) damage per second. THEN it would be worth the mana (balanced to be lower damage than anything else so the slow can stay at current values). Otherwise, drop the mana cost to 35/40/45/50/55. Or optionally, make it debuff resists, or do anything besides just slow.

3) Added teamfight utility to his ult. Currently he barely offers anything to a teamfight besides his Fling (poison damage takes too long. no CC removal. and so forth). Comparatively, I present Amumu, Malphite, and Sion. Other tanks also compare favorably, but that's way too much typing. Amumu and Malphite both have hard CC and a method to make the initiation in melee range. Amumu does drastically more damage once there than Singed, and has an ultimate that locks their team down. Malphite isn't quite so awesome, but has a low-cd slow that doubles as a move speed buff (often making him a better chaser than Singed, oddly), and his initiation is a mass stun. Once the fight starts, he is worse off than Singed in terms of contribution, but the low-cd slow is clutch for helping finish runners, and getting 2-3 stuns to start a fight can often win it right there.
TL;DRp3: Right now Singed is really 2 skills, and 2 skills to help him make the Fling. He needs more damage or utility.</Text>
            
        </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
    textStyle: {
        flexDirection:"row",
      color: 'white',
      alignSelf: 'center',
      flexWrap: 'wrap'
    },
  });
export default patch;