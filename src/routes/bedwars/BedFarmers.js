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
import { withTheme } from '@material-ui/core';
import { makeTable, makeTableParser } from '../../components/row/GameTable';
import config from '../../firebase/config';

const columns = [
    { title: "Name", field: "name", searchable: true },
    { title: "Kill Record", field: "k", defaultSort: "desc" },
    { title: "Violations", field: "v" },
];

class BedFarmers extends React.Component {
    render() {
        const fields = {
            name: "n",
        }
        return (
            <div>
                {makeTable(columns, "Kill Farmers Leaderboard", (query, json) => makeTableParser(query, fields, json),
                    config.farmers, this.props.theme, "/b")}
            </div>
        );
    }
}

export default withTheme(BedFarmers);