const Event = require('../models/Event');

module.exports.createEvent = (req, res, next) => {
  const { name } = req.query;
  const event = new Event({ name: name });

  console.log(`event ${name} is being created`);

  event.save()
    .then(() => {
        res.json({
          'data': 'Event created!'
        });
    }).catch(error => {
        console.error(error);
        next(error);
    });
}