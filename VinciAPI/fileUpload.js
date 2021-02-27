const fs = require('fs');

const fileupload = function(app,upload){
    app.post('/api/upload', upload.single('file'),function(req, res){
        res.json({
			'message': 'File uploaded'
		});
    });
}

module.exports = fileupload