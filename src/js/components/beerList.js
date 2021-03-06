import React from 'react'

import BeerItem from './beerItem'

import caution_weka from '../../images/caution_weka.png'

const BeerList = () => {
    return (
        <div className="section">
          <h3>The Brews</h3>
          <ul className="beer_list">
            <BeerItem name="Caution Weka!" number="14" image={caution_weka}>
                As the name and label suggest, this beer is about New Zealand, specifically about Motueka hops. I used it as the only hop for my third Saison that
                I brewed in August 2017. The malt bill consisted of Pilsner, Golden Promise, wheat, and Munich malt, as well as some flaked spelt to create a hazy
                golden color with a semi-dry body and a creamy mouthfeel. As the go-to yeast for my Saisons I used Mangrove Jack's M29 French Saison. The hop schedule
                was mostly whirpool and dry-hopping. Only a few grams at the beginning of the boil to get to 25 IBUs and prevent boil-overs.<br/>
                My mash efficiency was 10% better than usual and I ended up with an OG of 1.055 instead of the planned 1.048. I fermented the beer at 30°C which was the
                upper end of the recommended temperature range and caused quite a vigorous fermentation that ended in an FG of 1.006 after 10 days with approx. 6.5 ABV.
                After that I dry-hopped with 5 g/l for 4 days before priming and bottling for 2.6 vol. of carbonation.<br/>
                The finished beer is hazy golden with a white head. It has a bright lime and fruity aroma with hints of gooseberry and other southern hemisphere
                hop aromas accompanied by peppery spiciness.
                The yeast produced a great mouthfeel that combines refreshing dryness with a lingering carbonation and creaminess from the wheat and spelt. Although dry,
                it has more of a medium body that never feels watery. Fruits, spiciness, and some grainy maltiness in the background characterize the taste that finishes
                in a pleasantly smooth bitterness.<br/>
                Motueka is a great single hop for Saisons. It perfectly blends with the fruitiness and spiciness of the yeast while still providing its unique aromas that
                got even more pronounced and tropical with time. For other styles like IPAs, I would probably combine it with dank and earthy hops like Galaxy, Simcoe, or
                Mosaic to balance their pungency.
            </BeerItem>
          </ul>
        </div>
    )
}

export default BeerList
