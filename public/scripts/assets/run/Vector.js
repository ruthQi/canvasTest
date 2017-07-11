function Vector(xx, yy)
{
   this.x = xx;
   this.y = yy;
}

//����
Vector.prototype.reset = function(xx, yy)
{
   this.x=xx;
   this.y=yy;
}
// ----------------getClone----------------------------------------------
// ����
Vector.prototype.getClone = function()
{
   return new Vector(this.x,this.y);
}
// ----------------equals------------------------------------------------
// �Ƚ��Ƿ����
Vector.prototype.equals = function(v)
{
   return (this.x==v.x && this.y==v.y);
}
// ----------------plus--------------------------------------------------
// �ӷ�,�ı䵱ǰ����
Vector.prototype.plus = function(v)
{
   this.x += v.x;
   this.y += v.y; 
}
// ----------------plusNew-----------------------------------------------
// ���,�����¶���
Vector.prototype.plusNew = function(v)
{
   return new Vector(this.x+v.x,this.y+v.y);
}
// ----------------minus-------------------------------------------------
// ����,�ı䵱ǰ����
Vector.prototype.minus = function(v)
{
   this.x -= v.x;
   this.y -= v.y;
}
// ----------------minusNew----------------------------------------------
// ���,�����¶���
Vector.prototype.minusNew = function(v)
{
   return new Vector(this.x-v.x,this.y-v.y);
}
// ----------------negate------------------------------------------------
// ����,�ı䵱ǰ����
Vector.prototype.negate = function()
{
   this.x = - this.x;
   this.y = - this.y;
}
// ----------------negateNew---------------------------------------------
// ����,�����¶���
Vector.prototype.negateNew = function()
{
   return new Vector(-this.x,-this.y);
}
// ----------------scale-------------------------------------------------
// ����,�ı䵱ǰ����
Vector.prototype.scale = function(s)
{
   this.x *= s;
   this.y *= s;
}
// ----------------scaleNew----------------------------------------------
// ����,�����¶���
Vector.prototype.scaleNew = function(s)
{
   return new Vector(this.x * s, this.y * s);
}
// ----------------getLength---------------------------------------------
// ��ȡ��������
Vector.prototype.getLength = function()
{
   return Math.sqrt(this.x*this.x + this.y*this.y);
}
// ----------------setLength---------------------------------------------  
// ������������
Vector.prototype.setLength = function(len)
{
   var r = this.getLength();
   if (r) this.scale (len / r);
   else this.x = len;
}
// ----------------getAngle----------------------------------------------
// ��ȡ�����Ƕ�
Vector.prototype.getAngle = function()
{
   return Math.atan2(this.y, this.x);
}
// ----------------setAngle----------------------------------------------
// ���������Ƕ�
Vector.prototype.setAngle = function(ang)
{
   var r = this.getLength();
   this.x = r * Math.cos (ang);
   this.y = r * Math.sin (ang);
}
// ----------------rotate------------------------------------------------
// ������ת���ı䵱ǰ����
Vector.prototype.rotate = function(ang)
{  
   var ca = Math.cos (ang);
   var sa = Math.sin (ang);     
   var rx = this.x * ca - this.y * sa;
   var ry = this.x * sa + this.y * ca;
   this.x = rx;
   this.y = ry;
} 
// ----------------rotateNew---------------------------------------------
// ������ת�������¶���
Vector.prototype.rotateNew = function(ang)
{
   var v=new Vector(this.x,this.y);
   v.rotate(ang);
   return v;
}
// ----------------dot---------------------------------------------------
// ���
Vector.prototype.dot = function(v)
{
   return this.x * v.x + this.y * v.y;
}
// ----------------getNormal---------------------------------------------
// ������
Vector.prototype.getNormal = function()
{
   return new Vector(-this.y,this.x);
}
// ----------------isPerpTo----------------------------------------------
// ��ֱ��֤
Vector.prototype.isPerpTo = function(v)
{
   return (this.dot (v) == 0);
}
// ----------------angleBetween------------------------------------------
// �����ļн�
Vector.prototype.angleBetween = function(v)
{
   var dp = this.dot (v); 
   var cosAngle = dp / (this.getLength() * v.getLength());
   return Math.acos (cosAngle); 
}