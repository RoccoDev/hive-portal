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
import { Monthlies } from '../../firebase/config';
import GameProfile from '../../components/row/GameProfile';

const stats = {
    points: "Points",
    victories: "Victories",
    kills: "Kills",
    deaths: "Deaths",
    kd: {
        name: "K/D",
        value: (data) => (data.kills / data.deaths).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
}

function CrMonthliesProfile(props) {
    return (<GameProfile stats={stats} fbConfig={Monthlies.cr} path="monthly/"
        name={"cr"} />);
}

export default CrMonthliesProfile;