class Shuffle {
    static array(a) {
        if (!Array.isArray(a)) {
            console.log('not an array');
            return;
        };
        //do the shuffling
        //remove an from random location and insert at back
        //repeat 16 times
        const times = 24;
        let i = 0;

        let oa = [];//other array
        for (; i < times; i++) {
            let len = a.length;
            let randi = Math.floor(Math.random() * len);
            //get random element and put at begining
            let rande = a.splice(randi, 1);//it returns array
            oa.push(...rande);//thank you spread sintax
        }
        return oa;
    }
}

export default Shuffle;