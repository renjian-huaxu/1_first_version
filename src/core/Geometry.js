import Face4 from "./Face4";
import Vector3 from "./Vector3";

export default class Geometry {

    vertices = [];
	faces = [];
	uvs = [];

    constructor() {

    }

    computeNormals() {
        var vA, vB, vC, cb, ab, normal;

		this.vertices.forEach(vertex => {
			vertex.normal.set(0, 0, 0)
		})

		this.faces.forEach(face => {
			vA = this.vertices[ face.a ];
			vB = this.vertices[ face.b ];
			vC = this.vertices[ face.c ];

			cb = new Vector3();
			ab = new Vector3();
			normal = new Vector3();

			cb.sub( vC.position, vB.position );
			ab.sub( vA.position, vB.position );
			cb.crossSelf( ab );

			if ( !cb.isZero() ) {

				cb.normalize();

			}

			face.normal = cb;

			vA.normal.addSelf( normal );
			vB.normal.addSelf( normal );
			vC.normal.addSelf( normal );

			if ( face instanceof Face4 ) {

				this.vertices[ face.d ].normal.addSelf( normal );

			}
		})

    }
}