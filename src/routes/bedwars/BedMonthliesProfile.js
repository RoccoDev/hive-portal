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

import React from 'react';
import Bedwars from '../../firebase/config';
import GameProfile from '../../components/row/GameProfile';

const stats = {
    __points: "Points",
    _victories: "Victories",
    played: "Games Played",
    _kills: "Kills",
    _kjdeaths: "Deaths",
    zBeds: "Beds Destroyed",
    zTeams: "Teams Eliminated",
    kd: {
        name: "K/D",
        value: (data) => (data._kills / data._kjdeaths).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    },
    wl: {
        name: "W/L",
        value: (data) => (data._victories / (data.played - data._victories)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
}

function BedMonthliesProfile() {
    return (<GameProfile stats={stats} fbConfig={Bedwars.monthlies} name="bedwars" />);
}

export default BedMonthliesProfile;