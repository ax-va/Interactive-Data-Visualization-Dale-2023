import logging
# Creates a logger with the name of this module
logger = logging.getLogger(__name__)
# ...
logger.debug('Some useful debugging output')
logger.info('Some general information')
# Setting the logging level to 'debug' provides the most detailed information available
logging.basicConfig(level=logging.DEBUG)
