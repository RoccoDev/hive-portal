// Copyright (C) 2020 RoccoDev
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

const modes = {
    "BedWars": [
        {
            name: "Monthlies",
            url: "/bedwars/monthlies"
        },
        {
            name: "Winstreaks",
            url: "/bedwars/winstreaks"
        },
        {
            name: "Stats",
            url: "/bedwars/stats"
        },
        {
            name: "Farmers",
            url: "/bedwars/farmers"
        },
        {
            name: "Ranks",
            url: "/bedwars/ranks"
        },
        {
            name: "Maps",
            url: "/bedwars/maps"
        }
    ],
    "Trouble in Mineville": [
        {
            name: "Monthlies",
            url: "/timv/monthlies"
        }
    ],
    "SkyWars": [
        {
            name: "Monthlies",
            url: "/skywars/monthlies"
        }
    ],
    "DeathRun": [
        {
            name: "Monthlies",
            url: "/deathrun/monthlies"
        }
    ],
    "Cowboys and Indians": [
        {
            name: "Monthlies",
            url: "/cai/monthlies"
        }
    ],
    "Hide and Seek": [
        {
            name: "Monthlies",
            url: "/hide/monthlies"
        }
    ],
    "BlockParty": [
        {
            name: "Monthlies",
            url: "/bp/monthlies"
        }
    ],
    "SkyGiants": [
        {
            name: "Monthlies",
            url: "/gnt/monthlies"
        }
    ],
    "SkyGiants: Mini": [
        {
            name: "Monthlies",
            url: "/gntm/monthlies"
        }
    ]
}
let ModeState = {
    index: -1
}
export default modes;
export { ModeState };