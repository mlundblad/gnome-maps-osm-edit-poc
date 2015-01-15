/* -*- Mode: JS2; indent-tabs-mode: nil; js2-basic-offset: 4 -*- */
/* vim: set et ts=4 sw=4: */
/*
 * Copyright (c) 2015 Marcus Lundblad.
 *
 * GNOME Maps is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the
 * Free Software Foundation; either version 2 of the License, or (at your
 * option) any later version.
 *
 * GNOME Maps is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with GNOME Maps; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * Author: Marcus Lundblad <ml@update.uu.se>
 */

const OSMNode = imports.osmNode;

function start() {
    print ("Start...");
    // TODO: handle some basic CLI args to compose simple OSM changesets

    let node = new OSMNode.OSMNode({changeset: 42, lat: 59.00000, lon: 16.000000,
				    tags: {name: 'foo', amenity: 'pub'}});
    // node.setTag('name', 'FooPub');
    // node.setTag('amenity', 'pub');
    node.setTag('foo', 'bar');

    print (node);

    node.deleteTag('foo');

    print (node);
}
