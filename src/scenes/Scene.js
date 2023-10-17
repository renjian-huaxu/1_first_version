
export default class Scene {

    objects = [];

    constructor() {

    }

    addObject(object) {
        this.objects.push(object);
    }

    removeObject(object) {
		for ( var i = 0, l = this.objects.length; i < l; i++ ) {

			if ( object == this.objects[ i ] ) {

				this.objects.splice( i, 1 );
				return;

			}
		}
    }

    add(object) {
        this.addObject( object );
    }

    toString() {
        return 'MTHREE.Scene ( ' + this.objects + ' )';
    }
}