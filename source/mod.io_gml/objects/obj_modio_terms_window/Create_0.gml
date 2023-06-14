
event_inherited();

title = "Users Agreement"
text = plaintext

instance_create_depth(x+200,bbox_bottom-75,depth-1,obj_modio_terms_agree).text = buttons.agree.text
instance_create_depth(x-200,bbox_bottom-75,depth-1,obj_modio_terms_disagree).text = buttons.disagree.text
