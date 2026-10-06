import type { ImgKey } from "./images";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  service: string;
  excerpt: string;
  image: ImgKey;
  blocks: { t: "h2" | "h3" | "p"; x: string }[];
};

// Articles carried over from the original blackline-roofing.com blog.
export const POSTS: Post[] = [
  {
    "slug": "roof-coating-mesa-az",
    "title": "When A Roof Coating Is Worth It In Mesa",
    "date": "2026-09-28",
    "category": "Roof Coatings",
    "service": "roof-coatings",
    "excerpt": "A roof coating in Mesa AZ can add years to a sound flat roof and waste money on a failing one. Here is how to tell which roof you have before you spend.",
    "image": "coatingCrew",
    "blocks": [
      {
        "t": "p",
        "x": "A coating is not a roof, it is a layer that protects one, and the distance between those two ideas is where most of the money on this kind of project gets wasted."
      },
      {
        "t": "p",
        "x": "Applied over a sound flat roof, an elastomeric coating in the Valley can add close to a decade of service while cutting heat gain noticeably, but applied over a roof that has already failed underneath, it hides the problem for roughly one season before the leaks come back."
      },
      {
        "t": "h2",
        "x": "What The Product Actually Does"
      },
      {
        "t": "p",
        "x": "Elastomeric coatings go on as a thick liquid and cure into a flexible, seamless membrane across the entire surface, and that flexibility is the whole reason they work here. Valley roofs expand and contract every day of the year, moving through a sixty degree swing between three in the afternoon and sunrise the next morning, and rigid materials eventually crack under that cycle while a coating stretches along with it."
      },
      {
        "t": "p",
        "x": "Reflectivity is the second function, since most coatings go down white or light gray and bounce back a substantial share of the solar energy that would otherwise soak into the roof and radiate into the space below."
      },
      {
        "t": "p",
        "x": "That same reflectivity is why no coating is permanent, because dirt accumulates and the surface chalks and thins under constant ultraviolet exposure until the layer needs renewing."
      },
      {
        "t": "h2",
        "x": "The Roofs Coatings Belong On"
      },
      {
        "t": "p",
        "x": "Foam roofs need one by design, since spray foam offers excellent waterproofing and insulation with almost no ultraviolet resistance, which leaves the coating as the only thing standing between the foam and the sun. Recoating a foam roof on schedule is maintenance rather than repair, and it is what allows that system to keep performing more or less indefinitely."
      },
      {
        "t": "p",
        "x": "Modified bitumen and built up roofs take coatings well too, provided the substrate underneath is still intact, and a cap sheet that has weathered but stayed watertight makes a strong candidate."
      },
      {
        "t": "p",
        "x": "Metal is another common application, particularly on older panel systems where fasteners and seams have started to weep, because a coating bridges those small openings without a full tear off. Commercial buildings across Mesa lean on coatings heavily for exactly that reason, since recoating happens with the business open and the roof still in service, which is never true of a replacement."
      },
      {
        "t": "h2",
        "x": "The Roofs They Do Not Belong On"
      },
      {
        "t": "p",
        "x": "Wet insulation is the clearest disqualifier, because sealing the top of a roof that already has water in its layers traps that moisture inside, and the decking underneath keeps deteriorating where nobody can see it."
      },
      {
        "t": "p",
        "x": "Widespread substrate failure rules it out as well, since coating a roof with open seams, deteriorated felt and multiple soft spots amounts to stretching a flexible skin over a structural problem."
      },
      {
        "t": "p",
        "x": "Extensive ponding needs correcting before anything gets applied, as standing water sitting for days breaks down most coatings faster than the manufacturer ever projected, which makes the drainage issue the actual repair. A roof that has already been coated several times is usually finished as a candidate too, because those layers accumulate weight and eventually stop bonding properly to what sits beneath them."
      },
      {
        "t": "h2",
        "x": "The Assessment That Settles It"
      },
      {
        "t": "p",
        "x": "The question is never whether a coating would help, it is whether the roof underneath is sound enough to be worth protecting, and that gets answered through a moisture survey and a physical inspection rather than a look from the parking lot."
      },
      {
        "t": "p",
        "x": "We check for saturated insulation, probe the substrate for soft areas and examine every seam, penetration and drain on the roof, and where something looks questionable we sometimes take a small core out of the roof to see exactly what the layers look like. Learning that a section is wet from a two inch cut is far cheaper than learning it from a coating that fails in eighteen months."
      },
      {
        "t": "p",
        "x": "Photographs come out of every one of those inspections, so you can see the wet section or the failed seam yourself before anyone at Blackline Roofing and Contracting tells you what the roof needs."
      },
      {
        "t": "h2",
        "x": "How The Work Goes"
      },
      {
        "t": "p",
        "x": "Preparation accounts for most of the job and most of the reason coatings fail early, because the roof has to be cleaned thoroughly and a coating applied over dust, chalk or biological growth bonds to the debris rather than to the roof."
      },
      {
        "t": "p",
        "x": "Repairs happen before anything else goes down, with open seams sealed, damaged sections patched and flashing addressed while the surface is still accessible and there is nothing covering it."
      },
      {
        "t": "p",
        "x": "Primer follows where the substrate calls for it, then the coating itself goes on in multiple passes, since manufacturers specify a total cured thickness and hitting that number is what determines whether you get the warrantied service life or half of it. Curing needs dry weather and moderate temperatures, which is one more reason coating work in the Valley belongs between October and May rather than in the middle of monsoon season."
      },
      {
        "t": "h2",
        "x": "What It Buys You"
      },
      {
        "t": "p",
        "x": "The clearest return is time, because a sound flat roof that would have needed replacing in three years can often run another eight or ten with a properly applied coating."
      },
      {
        "t": "p",
        "x": "Reflectivity shows up in cooling costs, though how much depends heavily on the building, since a low slope commercial roof over conditioned space sees a far bigger difference than a small patio section on a house."
      },
      {
        "t": "p",
        "x": "There is a disruption argument as well that matters more than it sounds, because coating involves no tear off, no dumpsters and no exposed decking, so the space underneath stays fully usable throughout. What it does not buy is a reset, since a coated roof remains the same roof with the same age and history, extended rather than replaced."
      },
      {
        "t": "h2",
        "x": "When To Stop Coating And Replace"
      },
      {
        "t": "p",
        "x": "Every roof eventually reaches the point where another coating is money spent on a system that has run out, and recurring leaks in different areas, decking that flexes underfoot and insulation reading wet across large sections all point in that direction."
      },
      {
        "t": "p",
        "x": "The honest version of that conversation is the one worth having, because a contractor who recommends coating a roof with saturated insulation is selling you two years and you will pay for the replacement anyway."
      },
      {
        "t": "p",
        "x": "We handle repairs, coatings and replacements, and none of those is the answer we start from, since the roof itself determines which conversation makes sense."
      },
      {
        "t": "h2",
        "x": "Find Out Which One You Need"
      },
      {
        "t": "p",
        "x": "If your flat roof is aging, leaking occasionally or simply overdue for attention, a coating may be exactly right, and it may also be the wrong spend entirely, which is worth knowing before a crew shows up with product."
      },
      {
        "t": "p",
        "x": "We work on flat and low slope roofs across Mesa, the East Valley and the greater Phoenix area. Contact us for an inspection and we will document what the roof is doing and tell you plainly whether a coating makes sense for it."
      }
    ]
  },
  {
    "slug": "foam-vs-shingle-roof-arizona-homes",
    "title": "Foam Vs Shingle Roof For Arizona Homes",
    "date": "2026-09-21",
    "category": "Shingle Roofing",
    "service": "shingle-roofing",
    "excerpt": "Foam vs shingle roof for Arizona homes is decided by slope before anything else. Here is what each system does well and why many Valley homes end up with both.",
    "image": "aerialDrone",
    "blocks": [
      {
        "t": "p",
        "x": "Most homeowners who ask Blackline Roofing and Contracting about foam versus shingle roofing believe they are choosing between two products, when in practice they are usually looking at two different roofs on the same house."
      },
      {
        "t": "h2",
        "x": "Slope Decides Most Of It Before You Do"
      },
      {
        "t": "p",
        "x": "Shingles shed water rather than seal against it, relying on gravity and overlap with each course covering the seam of the one below, which means they need enough pitch to move water off the roof quickly. Put shingles on a low slope surface and water sits on them long enough to work backward under that overlap, and the resulting leak is not a product defect so much as a system being used outside what it was built for."
      },
      {
        "t": "p",
        "x": "Spray polyurethane foam was designed for exactly the surfaces shingles cannot handle, forming one continuous layer with no laps and no fasteners anywhere in it. That seamlessness is what allows it to perform where water lingers instead of running off."
      },
      {
        "t": "p",
        "x": "So for most Arizona homes the honest answer to the comparison is that the roof already made the decision, and the useful question becomes which system belongs on which section of it."
      },
      {
        "t": "h2",
        "x": "What Foam Is And What It Asks For"
      },
      {
        "t": "p",
        "x": "Foam goes down as a liquid that expands and cures into a solid surface bonded directly to the deck, flowing around vents, pipes and equipment curbs and encapsulating them as part of the same application. That eliminates the flashing details where flat roofs typically begin to leak, since there is nothing separate to seal in the first place."
      },
      {
        "t": "p",
        "x": "It also insulates while it waterproofs, which no other roofing material genuinely does, and in a climate where cooling runs eight months out of the year that thermal layer across the entire roof surface returns something measurable."
      },
      {
        "t": "p",
        "x": "What foam will not do is take care of itself, because ultraviolet light degrades the material and a protective coating goes over the top to prevent that. Recoating on schedule keeps the system running almost indefinitely, while skipping it long enough lets the sun reach the foam underneath and turns a maintenance item into a much larger repair."
      },
      {
        "t": "h2",
        "x": "Where Shingles Earn Their Place"
      },
      {
        "t": "p",
        "x": "On a pitched roof, shingles remain proven, widely available and simple to work on, with straightforward installation and repairs that any competent roofer can handle."
      },
      {
        "t": "p",
        "x": "Arizona sun is harder on asphalt than the printed warranty period suggests, and heat combined with ultraviolet exposure ages the material faster here than it would in a milder climate, so shingle roofs in the Valley generally fall short of their advertised lifespan."
      },
      {
        "t": "p",
        "x": "Product choice makes a measurable difference because of that, since architectural shingles hold up considerably better than three tab and the gap between them widens across the second half of the roof’s life. Attic ventilation matters just as much as the shingle itself, because a roof over a poorly vented attic cooks from both directions, which is why airflow gets attention on every shingle installation we do."
      },
      {
        "t": "h3",
        "x": "Damage Tends To Stay Small"
      },
      {
        "t": "p",
        "x": "The quieter advantage of shingles is that problems stay contained, since individual shingles can be replaced without disturbing the rest of the roof and a wind event usually means a short repair visit rather than a full project."
      },
      {
        "t": "h2",
        "x": "The Trade You Are Actually Making"
      },
      {
        "t": "p",
        "x": "Foam asks for scheduled maintenance and returns a longer service life along with better energy performance, while shingles ask almost nothing of you and give back a shorter run in this climate."
      },
      {
        "t": "p",
        "x": "That is the entire trade, and how it lands depends on the owner more than the building, because someone who will actually track a recoating cycle gets excellent value out of foam while someone who would rather not think about the roof between problems is better served by a system that does not depend on them remembering."
      },
      {
        "t": "p",
        "x": "How long you plan to stay in the house factors in as well, since a longer service life and a maintenance schedule both mean more to someone twenty years into a home than to someone planning to sell within three."
      },
      {
        "t": "h2",
        "x": "Most Valley Homes Need Both"
      },
      {
        "t": "p",
        "x": "Walk any Mesa neighborhood and you will see pitched roofs with a flat section grafted onto them, covering a patio, a carport, an addition or a garage, and those flat sections are almost always where the leaks are."
      },
      {
        "t": "p",
        "x": "They get patched repeatedly with materials never intended for standing water, and each patch holds until the next real rain arrives. The practical answer in that situation is two systems on one house, with shingles or tile handling the pitched areas and foam covering the flat sections so each one does the job it was engineered for."
      },
      {
        "t": "p",
        "x": "Ponding is the clearest indicator of which surface needs which treatment, because wherever water still sits a full day after the rain stops, a seamless system will outperform anything assembled from overlapping pieces."
      },
      {
        "t": "h2",
        "x": "What To Look At On Your Own Roof"
      },
      {
        "t": "p",
        "x": "Start with where the leaks have actually occurred, since a history of repeated repairs concentrated in one area usually points to a system mismatch rather than a workmanship problem."
      },
      {
        "t": "p",
        "x": "Look at the flat sections the day after a rain and note how long standing water takes to clear, because anything beyond forty eight hours points to a drainage issue that needs correcting regardless of which system goes on top."
      },
      {
        "t": "p",
        "x": "Consider the roof as a whole rather than piece by piece, since replacing the pitched area while leaving a failing flat section untouched means being back up there within a year. Everything past that comes down to what the deck is carrying and what condition it is in, and there is no version of that assessment that gets made properly from the driveway."
      },
      {
        "t": "h2",
        "x": "Get A Look At What You Have"
      },
      {
        "t": "p",
        "x": "We install and repair tile, shingle, foam and flat systems across Mesa and the greater Phoenix Valley, and on low slope work in particular the recommendation depends entirely on what the existing roof is doing rather than on any general preference."
      },
      {
        "t": "p",
        "x": "Reach out and we will come take a look, photograph the roof and tell you which system fits the house instead of which one we would rather sell."
      }
    ]
  },
  {
    "slug": "best-time-of-year-to-replace-a-roof-phoenix",
    "title": "The Best Time Of Year To Replace A Roof In Phoenix",
    "date": "2026-09-14",
    "category": "Roof Replacement",
    "service": "roof-replacement",
    "excerpt": "The best time of year to replace a roof in Phoenix runs October through May. Here is how heat, monsoon season and scheduling change the job month by month.",
    "image": "aerialBlue",
    "blocks": [
      {
        "t": "p",
        "x": "In most of the country, winter is the season that shuts roof work down, while here it is the season that makes the work go smoothly. That reversal catches people off guard when they start researching a replacement."
      },
      {
        "t": "p",
        "x": "The best time of year to replace a roof in Phoenix runs from October through May, and the reasoning has far less to do with crew comfort than with how roofing materials behave when the decking is sitting at one hundred and sixty degrees."
      },
      {
        "t": "h2",
        "x": "Why Summer Is Our Difficult Season"
      },
      {
        "t": "p",
        "x": "Asphalt softens in extreme heat, so a shingle that would take foot traffic without complaint in November scuffs and sheds granules in July, before the roof has seen a single drop of rain. Sealants and adhesives carry specified working temperature ranges as well, and Valley summers push past the top of many of them, which means products applied in those conditions can cure differently than the manufacturer intended."
      },
      {
        "t": "p",
        "x": "The working day shrinks too, because roof surfaces run considerably hotter than the surrounding air, so summer crews start before dawn and stop by midday and a two day job stretches across four."
      },
      {
        "t": "p",
        "x": "None of that makes summer replacement impossible, and Blackline Roofing and Contracting completes plenty of it every year with early starts and careful material handling. There is simply no reason to choose those conditions when your timeline has any flexibility at all."
      },
      {
        "t": "h2",
        "x": "Monsoon Season Adds A Variable Nobody Needs"
      },
      {
        "t": "p",
        "x": "Arizona monsoon season runs from roughly the middle of June through the end of September, and every roof replacement includes a stretch where the deck is open and the only thing protecting the house is a tarp."
      },
      {
        "t": "p",
        "x": "Storms in that season arrive with very little warning, so crews secure the roof at the end of each working day as standard practice, and while that approach works, it is a risk that disappears entirely once October comes around."
      },
      {
        "t": "p",
        "x": "Scheduling also gets harder during those months, because crews get pulled onto emergency leak repairs after every significant storm and planned projects have to move around them."
      },
      {
        "t": "h2",
        "x": "The Valley Calendar"
      },
      {
        "t": "h3",
        "x": "October Through December"
      },
      {
        "t": "p",
        "x": "This is the strongest window of the year, with temperatures back in a comfortable working range, monsoon season finished and winter rain still ahead. It is also the busiest stretch we see, since everyone who took damage over the summer books during these weeks, so calling early is the difference between choosing your date and accepting whatever is left."
      },
      {
        "t": "h3",
        "x": "January Through March"
      },
      {
        "t": "p",
        "x": "Winter in Phoenix stays entirely workable, though cool mornings occasionally push the start of a day back an hour and shingles take a little longer to seal down when the temperature drops. Neither is a real obstacle, and availability tends to improve through this period, so a flexible timeline often means a faster start."
      },
      {
        "t": "h3",
        "x": "April Through May"
      },
      {
        "t": "p",
        "x": "Spring gives you the last comfortable window before summer arrives, with stable conditions and monsoon season still weeks away. Homeowners who spent the winter thinking it over tend to move during these months, so getting ahead of that wave matters if you want the work finished before June."
      },
      {
        "t": "h3",
        "x": "June Through September"
      },
      {
        "t": "p",
        "x": "Summer work gets done and gets done properly, it just carries the most to work around in terms of heat, storms and shortened days. Emergencies never check the calendar anyway, so an active leak or fresh storm damage gets handled the week it happens regardless of the month."
      },
      {
        "t": "h2",
        "x": "How Long The Job Actually Takes"
      },
      {
        "t": "p",
        "x": "A shingle replacement on a typical Valley home runs one to three days from tear off through final cleanup, assuming nothing unexpected turns up underneath."
      },
      {
        "t": "p",
        "x": "Tile takes noticeably longer, because removing tile, rebuilding the roof beneath it and setting the tile back down is slower work by nature, and a full tile project often runs closer to a week depending on the size and complexity of the roof."
      },
      {
        "t": "p",
        "x": "Foam and coating systems depend on weather more than either of those, since application requires a dry surface and moderate temperatures, which is one more reason the cooler months suit flat and low slope projects."
      },
      {
        "t": "h2",
        "x": "What Usually Causes A Delay"
      },
      {
        "t": "p",
        "x": "Decking is the most common surprise on any replacement, because nobody knows the condition of the sheathing until the old roof comes off, and damaged sections have to be cut out and replaced before anything new goes down."
      },
      {
        "t": "p",
        "x": "HOA approval catches homeowners out more often than you would think, as some Valley communities require material and color sign off before work can begin and that process runs on its own timeline rather than yours."
      },
      {
        "t": "p",
        "x": "Material availability occasionally matters as well, particularly for specific tile profiles or discontinued colors that have to be sourced to match an existing roof, and permits add days even when everything about them is routine."
      },
      {
        "t": "h2",
        "x": "When The Timing Advice Stops Applying"
      },
      {
        "t": "p",
        "x": "Everything above assumes a roof that still has life left in it, because a roof leaking right now is a different situation entirely and waiting five months for a better season costs more than the timing ever saves."
      },
      {
        "t": "p",
        "x": "Water damage compounds quietly while you wait, adding wet insulation, softened decking and stained drywall to a scope that would have been limited to the roof itself."
      },
      {
        "t": "p",
        "x": "Financing exists partly for that reason, since qualifying replacements can be financed so a failing roof gets addressed on a workable schedule instead of getting pushed into another monsoon season on the hope that it holds one more year."
      },
      {
        "t": "h2",
        "x": "Know Where You Stand Before You Book"
      },
      {
        "t": "p",
        "x": "The homeowners who come out of a replacement happiest are almost always the ones who knew the roof was near the end and picked their own month, and an inspection is what makes that possible. Finding out you have three years left is every bit as useful as finding out you have one."
      },
      {
        "t": "p",
        "x": "Commercial properties gain even more from the lead time, since coordinating work on an occupied building around operating hours takes planning that an emergency will never allow."
      },
      {
        "t": "p",
        "x": "Contact us and we will get on the roof, document its condition and tell you honestly whether this is the season to do something about it."
      }
    ]
  },
  {
    "slug": "tile-underlayment-replacement-mesa",
    "title": "Tile Underlayment Replacement In Mesa And When Yours Is Due",
    "date": "2026-09-07",
    "category": "Tile Roofing",
    "service": "tile-roofing",
    "excerpt": "Tile underlayment replacement in Mesa reuses the tile you already own. Here is what the work involves, what we find underneath and how to know when it is time.",
    "image": "tileBattens",
    "blocks": [
      {
        "t": "p",
        "x": "Concrete tile in the Valley can last fifty years or more, while the felt underneath it lasts roughly half that, and the gap between those two numbers is the reason tile underlayment replacement in Mesa is one of the most common projects Blackline Roofing and Contracting takes on."
      },
      {
        "t": "p",
        "x": "It is also one of the least understood by the homeowners who need it, largely because the part that fails is the part nobody can see."
      },
      {
        "t": "h2",
        "x": "Twenty Years Is The Number Worth Watching"
      },
      {
        "t": "p",
        "x": "Tile does not waterproof a roof, it shades and shields the layer that does, taking the sun and deflecting the bulk of the rain so that the material beneath it can do the actual work. That work happens on a membrane fastened to the decking, where water that blows past or around the tile lands and runs off the roof the way it was designed to."
      },
      {
        "t": "p",
        "x": "Arizona heat is what shortens the membrane’s life, since attic temperatures cook it from underneath while the sun works on the tile above, and older felt based products generally reach the end of their run somewhere between twenty and twenty five years in this climate."
      },
      {
        "t": "p",
        "x": "So if your home went up in the late nineties or the early two thousands and still carries its original underlayment, the calendar alone is worth taking seriously. A great many houses across Mesa and Gilbert sit in exactly that window right now."
      },
      {
        "t": "h2",
        "x": "The Signals That Show Up First"
      },
      {
        "t": "p",
        "x": "Leaks that move around are the clearest indication, because a leak appearing in the same spot after every rain points to one identifiable defect such as a cracked tile or a failed flashing joint, and that is a repair rather than a replacement."
      },
      {
        "t": "p",
        "x": "When a leak turns up in a different room after each storm, the situation is different, since a membrane that has broken down across the whole roof lets water use whichever weak point suits the conditions that day."
      },
      {
        "t": "p",
        "x": "Debris gives you another clue, as deteriorated felt disintegrates over time and homeowners frequently find dark papery flakes collecting in the gutters and assume it is ordinary yard litter blown down from the trees."
      },
      {
        "t": "p",
        "x": "The shape of the roof matters too, because tile courses that have gone wavy where they once ran straight usually mean the decking beneath has softened from long term moisture, and that tells you water has been getting through for years rather than months."
      },
      {
        "t": "h2",
        "x": "What A Lift And Relay Involves"
      },
      {
        "t": "p",
        "x": "The project is often called a tile lift and relay, and the name describes it accurately, since the tile comes off, the roof gets rebuilt underneath it, and the same tile goes back on when the work is finished."
      },
      {
        "t": "p",
        "x": "Removal comes first, with tiles taken up by hand and stacked either on the roof or staged on the ground depending on the layout, and how carefully that step is handled determines how much replacement tile you end up paying for."
      },
      {
        "t": "p",
        "x": "Once the old underlayment comes off, the decking becomes visible for the first time in two decades, and any sheathing that has gone soft gets cut out and replaced before a single new layer goes down."
      },
      {
        "t": "p",
        "x": "New underlayment then covers the full roof surface along with new flashing at every penetration and transition, because flashing is where most leaks begin and putting old metal back over a fresh membrane undoes a good portion of the project. The tile goes back on last, with broken pieces swapped for matching stock, and from the street the house looks exactly as it did before."
      },
      {
        "t": "h2",
        "x": "What We Usually Find Under There"
      },
      {
        "t": "p",
        "x": "Rusted or undersized flashing turns up constantly, particularly around older skylights and at the transitions where a roof meets a vertical wall."
      },
      {
        "t": "p",
        "x": "Decking damage tends to cluster in predictable places, and valleys, the area below chimneys and any section beneath a flat roof transition are where water has usually been collecting quietly for years without producing an obvious leak."
      },
      {
        "t": "p",
        "x": "We also find a lot of previous repair work, and roof cement smeared across a problem area is a reliable sign that somebody treated the symptom from above without ever seeing what was happening below."
      },
      {
        "t": "p",
        "x": "No contractor can promise what sits under a tile roof before the tile comes off, but they can tell you honestly how decking replacement will be handled if it turns up, and that conversation belongs at the estimate rather than mid project."
      },
      {
        "t": "h2",
        "x": "Reusing Your Tile Is The Whole Point"
      },
      {
        "t": "p",
        "x": "Tile is the most expensive material on the roof, and in a lift and relay it is already sitting there in serviceable condition, which is what separates this work from a full roof replacement."
      },
      {
        "t": "p",
        "x": "You are paying for labor, new underlayment and new flashing instead of an entirely new roof system, and the result is another full underlayment cycle out of tile you already own. Done properly, a roof that was leaking into three rooms goes back to being something you stop thinking about for decades."
      },
      {
        "t": "h2",
        "x": "Questions To Ask Before You Hire Anyone"
      },
      {
        "t": "p",
        "x": "Ask how the tile will be handled during removal, since careless stacking creates breakage that you end up paying to replace, and ask whether new flashing is included in the scope, because if it is not then the most common leak points on your roof are being left exactly as they were."
      },
      {
        "t": "p",
        "x": "Ask what happens if the decking turns out to be damaged, and get that answer before the tile comes off rather than after, when the crew is already on the roof and the pressure is on to decide quickly."
      },
      {
        "t": "p",
        "x": "Finally, ask to see photographs of your own roof before you agree to anything, because any residential roofing company should be able to show you the condition their recommendation rests on."
      },
      {
        "t": "h2",
        "x": "Timing And Cost Considerations"
      },
      {
        "t": "p",
        "x": "Fall through spring is the practical window for this work in the Valley, since crews move faster in moderate temperatures and the roof is open during the months least likely to bring heavy rain."
      },
      {
        "t": "p",
        "x": "There is also real value in going before a leak forces the decision, because once water has been coming in for a season, decking repair and interior drywall work get added to a project that would otherwise have stayed entirely on the roof."
      },
      {
        "t": "p",
        "x": "Financing is available for qualifying projects, which gives homeowners a way to handle failing underlayment on their own schedule rather than waiting for a ceiling stain to make the call for them."
      },
      {
        "t": "h2",
        "x": "Find Out What Is Under Your Tile"
      },
      {
        "t": "p",
        "x": "A tile roof can look flawless from the curb while the membrane keeping water out of your house has nothing left to give, and the tile itself will never tell you which situation you are in."
      },
      {
        "t": "p",
        "x": "We work on tile roofs throughout Mesa and the East Valley, and every project starts with getting up there and photographing what is actually happening. Reach out to schedule an inspection and we will show you every layer rather than just the one you can see from the yard."
      }
    ]
  },
  {
    "slug": "monsoon-roof-damage-repair-arizona",
    "title": "Monsoon Roof Damage Repair After An Arizona Storm",
    "date": "2026-09-01",
    "category": "Roof Repair",
    "service": "roof-repair",
    "excerpt": "Monsoon roof damage repair usually starts months after the storm. Here is what Arizona wind and dust leave behind and how to find it before the rain does.",
    "image": "inspectorClayTile",
    "blocks": [
      {
        "t": "p",
        "x": "The call usually comes in October, from a homeowner who watched storms roll over the neighborhood all summer, saw nothing wrong afterward, and then found a stain spreading across a bedroom ceiling during the first slow rain of fall."
      },
      {
        "t": "p",
        "x": "Nothing about that sequence surprises us anymore. Most of the monsoon roof damage repair that Blackline Roofing and Contracting handles is work on damage that happened months earlier and stayed quiet until the weather changed enough to reveal it."
      },
      {
        "t": "h2",
        "x": "The Storm And The Leak Are Months Apart"
      },
      {
        "t": "p",
        "x": "A monsoon downburst hits hard and moves on within the hour, throwing water at the roof sideways for twenty minutes before the sky clears again. Roofs generally handle that better than you would expect, because the damage a storm causes is usually structural rather than immediate, meaning something shifts or tears without letting water through right away."
      },
      {
        "t": "p",
        "x": "Then October arrives with a rain that falls straight down for six hours, and water that has nowhere to run finds the opening that has been waiting since July. That delay is the reason a leak so often feels like it came out of nowhere, when in reality the roof has been compromised since the middle of summer."
      },
      {
        "t": "h2",
        "x": "Wind Works On The Edges"
      },
      {
        "t": "p",
        "x": "Monsoon gusts rarely tear a roof off in any dramatic sense, and instead they pry at the perimeter and at every place where two materials meet. On a tile roof that means lifting a tile just enough to break its seating and slide it out of line, and because the tile usually settles back down looking almost normal, the tear it left in the felt underneath goes unnoticed from the ground."
      },
      {
        "t": "p",
        "x": "Shingles fail through their adhesive instead of their position. Every course is bonded to the one below it by a seal strip, and once a gust breaks that bond the shingle flexes with every wind that follows, working its own nails loose a little more each time until water has a path."
      },
      {
        "t": "p",
        "x": "Ridge caps, rake edges, drip edge and eaves take the worst of it in both cases, since those are the points where wind can get underneath the roof system rather than simply blowing across it."
      },
      {
        "t": "h2",
        "x": "Dust Does More Damage Than People Expect"
      },
      {
        "t": "p",
        "x": "Valley storms carry an enormous amount of loose material, and sand, gravel, palm fronds and whatever the wind picked up two streets over all end up on your roof. That debris packs into valleys and collects around vents and equipment curbs, where it holds moisture against the roof surface long after the sun comes back out and blocks the channels tile roofs depend on to move water off."
      },
      {
        "t": "p",
        "x": "On flat and low slope sections the debris heads straight for the drains, and a single blocked scupper turns a roof designed to shed water in minutes into a shallow pool that sits for days. Clearing that material after a storm is one of the more useful things a homeowner can do, and it costs nothing but an afternoon."
      },
      {
        "t": "h2",
        "x": "What You Can Check From The Ground"
      },
      {
        "t": "p",
        "x": "Stand back from the house and look along the tile courses, which should run in straight and even lines, so a dark gap or a tile sitting slightly out of rank is worth noting even if nothing appears broken. On a shingle roof you are looking for bare patches, corners that have curled upward, and shingles that sit at a different angle than the ones around them."
      },
      {
        "t": "p",
        "x": "The gutters tell you a good deal as well. A heavy accumulation of granules means the shingle surface is wearing through, while dark papery flakes point to deteriorated underlayment coming apart somewhere above, and fascia or gutters pulled away from the house confirm that the wind that day had real force behind it."
      },
      {
        "t": "h2",
        "x": "Why We Start On The Roof Instead Of The Driveway"
      },
      {
        "t": "p",
        "x": "Almost everything worth finding after a storm is invisible from below, which is why our inspections begin on the roof itself and why we photograph the condition rather than describe it."
      },
      {
        "t": "h3",
        "x": "Torn Underlayment"
      },
      {
        "t": "p",
        "x": "Underlayment is the waterproof membrane beneath your tile or shingles, and it is the layer actually keeping water out of the house rather than the one you can see. When a tile lifts in a gust and drops back into place, the tear it leaves in the felt below stays completely hidden, and since Arizona heat has already been working on that material for years, a fresh tear in aging underlayment often decides whether the roof makes it through winter."
      },
      {
        "t": "h3",
        "x": "Flashing That Lost Its Seal"
      },
      {
        "t": "p",
        "x": "Flashing seals every point where the roof surface is interrupted, including chimneys, walls, skylights, vents and pipe penetrations, and those joints are where the majority of Valley leaks begin. Wind flexes the metal enough to crack the sealant behind it, so the flashing can look entirely intact while the seal it depends on has already opened up."
      },
      {
        "t": "h3",
        "x": "Standing Water On Flat Sections"
      },
      {
        "t": "p",
        "x": "Plenty of Mesa homes carry a flat section over a patio, addition or garage, and once storm debris blocks the drainage, water sits in an area built to clear within hours. Ponding water eventually finds every seam and fastener beneath it, and it adds weight the roof was never designed to hold for days at a time."
      },
      {
        "t": "h2",
        "x": "File While The Trail Is Still Warm"
      },
      {
        "t": "p",
        "x": "Wind damage is often covered by homeowners insurance, and coverage itself is rarely the sticking point. Timing and documentation are, because carriers want damage connected to a specific weather event, and the longer the gap between the storm and the claim, the harder that connection becomes to demonstrate."
      },
      {
        "t": "p",
        "x": "Dated photographs taken from the roof carry far more weight than any written description, which is why we document everything we find and can walk you through the process if you need support with a claim. Some damage will not qualify no matter how the timing lines up, and hearing that up front is better than hearing it after a denial."
      },
      {
        "t": "h2",
        "x": "What The Repairs Usually Involve"
      },
      {
        "t": "p",
        "x": "Most post storm work stays contained, with broken and slipped tiles replaced and reseated, torn sections of underlayment patched, and flashing reset with new sealant. The larger jobs almost always come from damage that went unaddressed, because once decking has gone wet it has to be cut out and replaced, and at that point a roof project starts reaching into the house."
      },
      {
        "t": "p",
        "x": "Our storm restoration work covers both ends of that range, though the version that starts with a call in October is nearly always the smaller and less expensive one."
      },
      {
        "t": "h2",
        "x": "Have Someone Walk It Before Winter"
      },
      {
        "t": "p",
        "x": "If storms passed over your street this summer, the absence of a leak does not mean the absence of damage, and more often it just means the rain has not been slow enough yet to expose what is up there."
      },
      {
        "t": "p",
        "x": "We work on tile and shingle roofs throughout Mesa and the East Valley, and every inspection ends with photographs you can look at yourself. Get in touch and we will show you exactly what this season left behind."
      }
    ]
  }
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
